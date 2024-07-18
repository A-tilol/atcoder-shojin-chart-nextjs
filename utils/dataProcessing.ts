import { UserSummary } from "@/app/page";
import {
  API_WAIT_MSEC,
  CHART,
  RATE_BORDER,
  RATE_COLOR,
} from "@/config/constants";
import { PlotData } from "plotly.js-dist-min";
import { getUserHistory, getUserSubmissions, UserHistory } from "./api";
import { sleep } from "./utils";

export const retrieveUniqueACSubs = async (
  user: string,
  period: number
): Promise<any[]> => {
  const epoch = Math.floor((Date.now() - period * 24 * 60 * 60 * 1000) / 1000);
  let subs = await getUserSubmissions(user, epoch);

  // ヒューリスティックコンテストを除外。コンテストリストを参照したくないので0点～3000点以外を除外
  subs = subs.filter(
    (sub: any) =>
      !sub.contest_id.toLowerCase().startsWith("ahc") &&
      0 <= sub.point &&
      sub.point <= 3000
  );

  subs = subs.filter((sub: any) => sub.result === "AC");

  subs.forEach((sub: any) => {
    const date = new Date(sub.epoch_second * 1000);
    sub.date = date.toISOString().split("T")[0];
  });

  subs.sort((a: any, b: any) => a.date.localeCompare(b.date));

  const uniqueACSubs: any[] = [];
  const uniqueKeys = new Set();
  for (const sub of subs) {
    if (!uniqueKeys.has(sub.problem_id)) {
      uniqueACSubs.push(sub);
      uniqueKeys.add(sub.problem_id);
    }
  }

  return uniqueACSubs;
};

export const accumulateYScore = (
  subs: any[],
  period: number
): [string[], number[], number[]] => {
  const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  };

  const accumulate = (dateToScore: { [key: string]: number }): number[] => {
    const sortedEntries = Object.entries(dateToScore).sort(
      ([dateA], [dateB]) => {
        return new Date(dateA).getTime() - new Date(dateB).getTime();
      }
    );
    const pointsCum = sortedEntries.map(([, score]) => score);
    for (let i = 1; i < pointsCum.length; i++) {
      pointsCum[i] += pointsCum[i - 1];
    }
    return pointsCum;
  };

  const dateToScore: { [key: string]: number } = {};
  const dateToAc: { [key: string]: number } = {};
  const startDate = formatDate(
    new Date(new Date().getTime() - period * 24 * 60 * 60 * 1000)
  );
  dateToScore[startDate] = 0;
  dateToAc[startDate] = 0;

  for (const sub of subs) {
    if (!(sub.date in dateToScore)) {
      dateToScore[sub.date] = 0;
      dateToAc[sub.date] = 0;
    }
    dateToScore[sub.date] += sub.point;
    dateToAc[sub.date] += 1;
  }

  const sortedDate = Object.keys(dateToScore).sort();
  const scoreCum = accumulate(dateToAc);
  const acCum = accumulate(dateToScore);

  return [sortedDate, scoreCum, acCum];
};

export const makeTooltipText = (dates: string[], subs: any[]): string[] => {
  const daySummary: { [key: string]: string[] } = {};

  for (const date of dates) {
    daySummary[date] = [];
  }

  for (const sub of subs) {
    const problem = `${sub.contest_id} ${sub.problem_id.split("_").pop()} ${
      sub.point
    }`;
    daySummary[sub.date].push(problem);
  }

  return Object.entries(daySummary).map(([date, dailyProblems]) => {
    const dailyPoints = dailyProblems.reduce(
      (sum, problem) => sum + parseInt(problem.split(" ").pop() || "0"),
      0
    );
    let text = `${date}<br>${dailyProblems.length} ACs, ${dailyPoints} Pts`;
    if (dailyProblems.length > 0) {
      dailyProblems.sort();
      text += `<br>${"- ".repeat(11)}<br>${dailyProblems.join("<br>")}`;
    }
    return text;
  });
};

export const makeUserSummary = (
  userID: string,
  today: string,
  subs: any[]
): UserSummary => {
  const todaySubs = subs.filter((sub) => {
    return sub.date === today;
  });

  const userSummary: UserSummary = {
    userID: userID,
    ACs: todaySubs.length,
    totalPoints: 0,
    maxPointPlobrem: "",
    maxPoints: 0,
  };

  for (const sub of todaySubs) {
    userSummary.totalPoints += sub.point;
    if (sub.point > userSummary.maxPoints) {
      userSummary.maxPoints = sub.point;
      userSummary.maxPointPlobrem = `${sub.contest_id} ${sub.problem_id
        .split("_")
        .pop()}`;
    }
  }

  return userSummary;
};

export const fetchSubData = async (
  users: string[],
  period: number
): Promise<any[]> => {
  let userSummary = null;
  const scoreData: Partial<PlotData>[] = [];
  const acData: Partial<PlotData>[] = [];
  for (const [i, user] of users.entries()) {
    if (i > 0) {
      await sleep(API_WAIT_MSEC);
    }
    const subs = await retrieveUniqueACSubs(user, period);

    const [dates, scores, ACs] = accumulateYScore(subs, period);
    const tooltipText = makeTooltipText(dates, subs);

    scoreData.push({
      type: CHART.TYPE,
      mode: CHART.MODE,
      name: user,
      x: dates,
      y: scores,
      text: tooltipText,
      hovertemplate: "%{text}",
      marker: {
        symbol: CHART.MARKER_SYMBOL,
      },
    });

    acData.push({
      type: CHART.TYPE,
      mode: CHART.MODE,
      name: user,
      x: dates,
      y: ACs,
      text: tooltipText,
      hovertemplate: "%{text}",
      marker: {
        symbol: CHART.MARKER_SYMBOL,
      },
    });

    if (i === 0) {
      userSummary = makeUserSummary(user, dates[dates.length - 1], subs);
    }
  }

  return [userSummary, scoreData, acData];
};

export const makeTooltipTextForRatings = (history: UserHistory[]): string[] => {
  const texts: string[] = [];
  for (const h of history) {
    const date = h.EndTime.split("T")[0];
    const diff = Math.abs(h.NewRating - h.OldRating);
    const sign = h.NewRating - h.OldRating >= 0 ? "+" : "-";
    let text = `${date}<br>${h.ContestName}<br>${"- ".repeat(11)}<br>`;
    text += `Rating ${h.NewRating}<br>Performance ${h.Performance}<br>Diff ${sign}${diff}`;
    texts.push(text);
  }
  return texts;
};

const makeMarkerColors = (history: UserHistory[]): string[] => {
  return history.map((h: UserHistory) => {
    if (h.Performance >= RATE_BORDER.RED) {
      return RATE_COLOR.RED;
    } else if (h.Performance >= RATE_BORDER.ORANGE) {
      return RATE_COLOR.ORANGE;
    } else if (h.Performance >= RATE_BORDER.YELLOW) {
      return RATE_COLOR.YELLOW;
    } else if (h.Performance >= RATE_BORDER.BLUE) {
      return RATE_COLOR.BLUE;
    } else if (h.Performance >= RATE_BORDER.LBLUE) {
      return RATE_COLOR.LBLUE;
    } else if (h.Performance >= RATE_BORDER.GREEN) {
      return RATE_COLOR.GREEN;
    } else if (h.Performance >= RATE_BORDER.BLOWN) {
      return RATE_COLOR.BLOWN;
    } else {
      return RATE_COLOR.GRAY;
    }
  });
};

export const fetchRatingData = async (
  users: string[]
): Promise<Partial<PlotData>[]> => {
  const ratingData: Partial<PlotData>[] = [];
  for (const user of users) {
    const history = await (
      await getUserHistory(user)
    ).filter((h: UserHistory) => h.IsRated);

    ratingData.push({
      type: CHART.TYPE,
      mode: CHART.MODE,
      name: user,
      x: history.map((h: UserHistory): string => {
        return h.EndTime.split("T")[0];
      }),
      y: history.map((h: UserHistory): number => {
        return h.NewRating;
      }),
      text: makeTooltipTextForRatings(history),
      hovertemplate: "%{text}",
      marker: {
        // symbol: CHART.MARKER_SYMBOL,
        color: makeMarkerColors(history),
        size: 6,
      },
    });
  }
  return ratingData;
};
