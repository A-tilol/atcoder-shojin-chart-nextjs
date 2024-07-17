import { UserSummary } from "@/app/page";
import { METRICS } from "@/config/constants";
import { getUserSubmissions } from "./api";

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
  period: number,
  kind: string
): number[] => {
  const formatDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  };

  const dateToScore: { [key: string]: number } = {};
  const today = new Date();
  for (let i = 0; i <= period; i++) {
    const date = formatDate(
      new Date(today.getTime() - i * 24 * 60 * 60 * 1000)
    );
    dateToScore[date] = 0;
  }

  for (const sub of subs) {
    if (kind === METRICS.SCORES) {
      dateToScore[sub.date] += sub.point;
    } else if (kind === METRICS.ACS) {
      dateToScore[sub.date] += 1;
    }
  }

  const sortedEntries = Object.entries(dateToScore).sort(([dateA], [dateB]) => {
    return new Date(dateA).getTime() - new Date(dateB).getTime();
  });
  const pointsCum = sortedEntries.map(([, score]) => score);
  for (let i = 1; i < pointsCum.length; i++) {
    pointsCum[i] += pointsCum[i - 1];
  }

  return pointsCum;
};

export const makeTooltipText = (dates: string[], subs: any[]): string[] => {
  const daySummary: { [key: string]: string[] } = {};

  for (const date of dates) {
    daySummary[date] = [];
  }

  for (const sub of subs) {
    if (!daySummary[sub.date]) {
      daySummary[sub.date] = [];
    }
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
