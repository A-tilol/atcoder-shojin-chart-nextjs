import { PlotType } from "plotly.js-dist-min";

export const SUB_API_URL =
  "https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions";
export const MAX_SUB = 500;
export const API_WAIT_MSEC = 1000;

export const MAX_RIVAL = 10;

export const USER_HISTORY_API_URL =
  "https://utjrulejlf6llrsomasflpiq7e0tkwqg.lambda-url.ap-northeast-1.on.aws";

export const METRICS = {
  SCORES: "Scores",
  ACS: "ACs",
  RATINGS: "Ratings",
};

export const CHART = {
  TYPE: "scatter" as PlotType,
  MODE: "lines+markers" as "lines+markers",
  MARKER: {
    symbol: "circle-open",
  },
};

export const CHEERING_WORDS0 = [
  "きゅうけい",
  "ちょーかいふく",
  "またあした",
  "いきててえらい",
];
export const CHEERING_WORDS1 = [
  "えらい",
  "かしこい",
  "すごい",
  "てんさい",
  "そんけいする",
  "すばらしい",
  "ゆうしゅう",
  "さいこう",
  "りっぱ",
];
export const CHEERING_WORDS2 = ["とうとい"];
export const CHEERING_WORDS3 = ["ひれふしちゃう"];

export const TWEET_TEXT_TEMPLATE = `{USER_ID}さんの今日の精進は{SHOJIN}🐾 {CHEERING_WORD}にゃ！

ACした最も難しい問題は {PLOBLEM} {MAX_POINTS}Pts！
https://atilol.atcoder-shojin-shart-nextjs.github.io
#AtCoder #AtCoder_Shojin_Chart`;

export const GITHUB_URL =
  "https://github.com/A-tilol/atcoder-shojin-chart-nextjs";
export const TWITTER_URL = "https://x.com/xxatilol";
