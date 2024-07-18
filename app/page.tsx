"use client";

import { ChartData } from "@/components/chart";
import { fetchRatingData, fetchSubData } from "@/utils/dataProcessing";
import React, { useEffect, useState } from "react";

import { Footer } from "@/components/footer";
import {
  CHEERING_WORDS0,
  CHEERING_WORDS1,
  CHEERING_WORDS2,
  CHEERING_WORDS3,
  MAX_RIVAL,
  TWEET_TEXT_TEMPLATE,
} from "@/config/constants";
import dynamic from "next/dynamic";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";

const DynamicChart = dynamic(() => import("@/components/chart"), {
  ssr: false,
});

const TitleHeader = () => {
  return (
    <>
      <h1 className="font-serif mb-6 text-3xl font-extrabold md:text-3xl lg:text-4xl">
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
          Period [days]
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

  return (
    <>
      <div className="mt-20 flex justify-center gray-800 text-2xl">Share</div>

      <div className="flex justify-center mt-5">
        <textarea
          id="message"
          className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          style={{ width: "420px" }}
          rows={6}
          value={tweetText}
          readOnly={true}
        ></textarea>
      </div>

      <div className="mt-2 flex justify-center">
        <button
          className="mt-2 font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleCopyClick}
        >
          <div className="flex items-center">
            <MdOutlineContentCopy />
            <span className="ml-2">Copy To Clipboard</span>
          </div>
        </button>

        <a
          className="ml-3 mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          href={`https://x.com/intent/tweet`}
          target="_blank"
        >
          <div className="flex items-center">
            <FaXTwitter />
            <span className="ml-2">Tweet</span>
          </div>
        </a>
      </div>

      <div className="mt-3 flex justify-center gray-800">
        「Copy To Clipboard」を押したあと、「Tweet」を押してこぴぺしてください！
      </div>

      <div className="mt-20">{/* footer */}</div>
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
  let [users, setUsers] = useState([""]);
  let [period, setPeriod] = useState(90);
  let [chartData, setChartData] = useState<ChartData>({
    scoreData: [],
    acData: [],
    ratingData: [],
    period: 0,
  });
  let [userSummary, setUserSummary] = useState<UserSummary>({
    userID: "",
    ACs: 0,
    totalPoints: 0,
    maxPoints: 0,
    maxPointPlobrem: "",
  });
  let [chartBlob, setChartBlob] = useState(new Blob());
  let [isChartDrawn, setIsChartDrawn] = useState(false);

  const handleInputChange = (id: string, value: string) => {
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

    let rivals = rivalIDs
      .split(",")
      .map((u) => u.trim())
      .filter((u) => u !== "");
    rivals = rivals.slice(0, Math.min(rivals.length, MAX_RIVAL));
    const users_ = [userID.trim(), ...rivals];

    setUsers(users_);
    fetchChartData(users_);
  };

  const fetchChartData = async (users: string[]) => {
    const [userSummary, scoreData, acData] = await fetchSubData(users, period);
    const ratingData = await fetchRatingData(users);
    const chartData: ChartData = {
      scoreData: scoreData,
      acData: acData,
      ratingData: ratingData,
      period: period,
    };

    setChartData(chartData);
    setUserSummary(userSummary);
  };

  const handleChartChange = (chartBlob_: Blob) => {
    setChartBlob(chartBlob_);
    setIsChartDrawn(true);
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
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow m-5">
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

          <div className="w-full mt-10" style={{ maxWidth: "1200px" }}>
            <DynamicChart
              users={users}
              chartData={chartData}
              onChartChange={handleChartChange}
            />

            <div className="mt-10">
              {isChartDrawn && (
                <TweetArea
                  userSummary={userSummary}
                  onCopyClick={handleCopyToClipboard}
                />
              )}
            </div>
          </div>
        </div>

        <Footer />
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
