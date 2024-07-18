import {
  API_WAIT_MSEC,
  MAX_SUB,
  SUB_API_URL,
  USER_HISTORY_API_URL,
} from "@/config/constants";
import { sleep } from "./utils";

export interface UserHistory {
  ContestName: string;
  ContestNameEn: string;
  ContestScreenName: string;
  EndTime: string;
  InnerPerformance: number;
  IsRated: boolean;
  NewRating: number;
  OldRating: number;
  Performance: number;
  Place: number;
}

export const getUserSubmissions = async (
  user: string,
  epoch: number
): Promise<any[]> => {
  const url = `${SUB_API_URL}?user=${user}&from_second=${epoch}`;
  const response = await fetch(url);
  const subs = await response.json();
  console.log("subs.", subs.length, url);

  if (subs.length < MAX_SUB) {
    return subs;
  }

  await sleep(API_WAIT_MSEC);
  const maxEpoch = Math.max(...subs.map((sub: any) => sub.epoch_second));
  return subs.concat(await getUserSubmissions(user, maxEpoch));
};

export const getUserHistory = async (user: string): Promise<UserHistory[]> => {
  const url = `${USER_HISTORY_API_URL}?userid=${user}`;
  const response = await fetch(url);
  const history = await response.json();
  // console.log(url);
  return history;
};
