"use client";

import { ChartData } from "@/components/chart";
import { sleep } from "@/utils/utils";
import { PlotData } from "plotly.js";
import React, { useEffect, useState } from "react";
import {
  accumulateYScore,
  makeTooltipText,
  makeUserSummary,
  retrieveUniqueACSubs,
} from "../utils/dataProcessing";

import {
  API_WAIT_MSEC,
  CHEERING_WORDS0,
  CHEERING_WORDS1,
  CHEERING_WORDS2,
  CHEERING_WORDS3,
  TWEET_TEXT_TEMPLATE,
} from "@/config/constants";
import dynamic from "next/dynamic";

const DynamicChart = dynamic(() => import("@/components/chart"), {
  ssr: false,
});

const TitleHeader = () => {
  return (
    <>
      <h1 className="font-serif mb-6 text-3xl font-extrabold md:text-2xl lg:text-3xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Atcoder
        </span>{" "}
        <span className="text-gray-700">精進チャート🐾</span>
      </h1>
    </>
  );
};

interface InputFieldsProps {
  userID: string;
  rivalIDs: string;
  period: number;
  onInputChange: (id: string, value: string) => void;
}

const InputFields: React.FC<InputFieldsProps> = ({
  userID,
  rivalIDs,
  period,
  onInputChange,
}) => {
  const handleChange = (e: any) => {
    onInputChange(e.target.id, e.target.value);
  };

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="user-id-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          User ID
        </label>
        <input
          type="text"
          id="user-id-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
          value={userID}
          placeholder="chokudai"
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="rival-ids-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Rival IDs (Optional)
        </label>
        <input
          type="text"
          id="rival-ids-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
          value={rivalIDs}
          placeholder="snuke, rng"
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="period-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Period (days)
        </label>
        <input
          type="number"
          id="period-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
          value={period}
          min={10}
          max={10000}
          step={10}
          placeholder="90"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

interface TweetAreaProps {
  userSummary: UserSummary;
  onCopyClick: (tweetText: string) => void;
}

const TweetArea: React.FC<TweetAreaProps> = ({ userSummary, onCopyClick }) => {
  let [tweetText, setTweetText] = useState("");

  useEffect(() => {
    if (userSummary.userID === "") {
      return;
    }

    const chooseCheeringWord = () => {
      const getElementAtRandom = (arr: string[]) => {
        return arr[Math.floor(Math.random() * arr.length)];
      };

      if (userSummary.totalPoints === 0) {
        return getElementAtRandom(CHEERING_WORDS0);
      } else if (userSummary.totalPoints < 2000) {
        return getElementAtRandom(CHEERING_WORDS1);
      } else if (userSummary.totalPoints < 4000) {
        return "ちょー" + getElementAtRandom(CHEERING_WORDS1);
      } else if (userSummary.totalPoints < 5000) {
        return getElementAtRandom(CHEERING_WORDS2);
      } else {
        return getElementAtRandom(CHEERING_WORDS3);
      }
    };

    const cheeringWord = chooseCheeringWord();
    const tweText = TWEET_TEXT_TEMPLATE.replace("{USER_ID}", userSummary.userID)
      .replace(
        "{SHOJIN}",
        `${userSummary.ACs}ACs ${userSummary.totalPoints}Pts`
      )
      .replace("{CHEERING_WORD}", cheeringWord)
      .replace("{MAX_POINTS}", userSummary.maxPoints.toString())
      .replace(
        "{PLOBLEM}",
        userSummary.ACs === 0 ? "なし" : userSummary.maxPointPlobrem
      );
    setTweetText(tweText);
  }, [userSummary]);

  const handleCopyClick = () => {
    onCopyClick(tweetText);
  };

  if (userSummary.userID === "") {
    return <></>;
  }

  return (
    <>
      <div className="flex justify-center">
        <textarea
          id="message"
          className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          style={{ width: "520px" }}
          rows={5}
          value={tweetText}
          readOnly={true}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleCopyClick}
        >
          Copy To Clipboard
        </button>

        <a
          className="mt-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          href={`https://x.com/intent/tweet`}
          target="_blank"
        >
          Tweet
        </a>
      </div>
    </>
  );
};

export interface UserSummary {
  userID: string;
  ACs: number;
  totalPoints: number;
  maxPoints: number;
  maxPointPlobrem: string;
}

const Content = () => {
  let [userID, setUserID] = useState("");
  let [rivalIDs, setRivalIDs] = useState("");
  let [period, setPeriod] = useState(90);
  let [chartData, setChartData] = useState<ChartData>({
    data: [],
    period: 0,
    metrics: "",
  });
  let [userSummary, setUserSummary] = useState<UserSummary>({
    userID: "",
    ACs: 0,
    totalPoints: 0,
    maxPoints: 0,
    maxPointPlobrem: "",
  });
  let [chartBlob, setChartBlob] = useState(new Blob());

  const metrics = "獲得スコア";

  const handleInputChange = (id: string, value: string) => {
    console.log(id, value);
    if (id == "user-id-input") {
      setUserID(value);
    } else if (id == "rival-ids-input") {
      setRivalIDs(value);
    } else if (id == "period-input") {
      setPeriod(Number(value));
    }
  };

  const handleDrawChartClick = async () => {
    if (userID === "") return;

    const rivals = rivalIDs
      .split(", ")
      .map((u) => u.trim())
      .filter((u) => u !== "");
    const users = [userID, ...rivals];
    console.log(users);

    fetchChartData(users);
  };

  const fetchChartData = async (users: string[]) => {
    const dates = Array.from({ length: period + 1 }, (_, i) => {
      const date = new Date(Date.now() - (period - i) * 24 * 60 * 60 * 1000);
      return date.toISOString().split("T")[0];
    });

    const usersData: Partial<PlotData>[] = [];
    for (const [i, user] of users.entries()) {
      if (i > 0) {
        await sleep(API_WAIT_MSEC);
      }
      const subs = await retrieveUniqueACSubs(user, period);

      const data: Partial<PlotData> = {
        type: "scatter",
        mode: "lines",
        name: user,
        x: dates,
        y: accumulateYScore(subs, period, metrics),
        text: makeTooltipText(dates, subs),
        hovertemplate: "%{text}",
      };
      usersData.push(data);

      if (i === 0) {
        setUserSummary(makeUserSummary(user, dates[dates.length - 1], subs));
      }
    }

    const chartData: ChartData = {
      data: usersData,
      period: period,
      metrics: metrics,
    };
    console.log(chartData);
    setChartData(chartData);
  };

  const handleChartChange = (chartBlob_: Blob) => {
    console.log(chartBlob_);
    setChartBlob(chartBlob_);
  };

  const handleCopyToClipboard = (tweetText: string) => {
    const clipboardItem = new ClipboardItem({
      "image/png": chartBlob,
      "text/plain": new Blob([tweetText], { type: "text/plain" }),
    });
    navigator.clipboard
      .write([clipboardItem])
      .then(() => console.log("copied."))
      .catch((error) => {
        console.error("クリップボードにコピーできませんでした。", error);
      });
  };

  return (
    <>
      <div className="m-5">
        <TitleHeader />

        <InputFields
          userID={userID}
          rivalIDs={rivalIDs}
          period={period}
          onInputChange={handleInputChange}
        />

        <div>
          <button
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleDrawChartClick}
          >
            Draw Chart
          </button>
        </div>

        <div className="w-full mt-10">
          <DynamicChart
            chartData={chartData}
            onChartChange={handleChartChange}
          />
        </div>

        <div className="mt-7">
          <TweetArea
            userSummary={userSummary}
            onCopyClick={handleCopyToClipboard}
          />
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className="m-2">
      <Content />
    </div>
  );
}
