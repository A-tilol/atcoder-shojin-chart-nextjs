import { API_WAIT_MSEC, MAX_SUB, SUB_API_URL } from "@/config/constants";
import { sleep } from "./utils";

export const getUserSubmissions = async (
  user: string,
  epoch: number
): Promise<any[]> => {
  const response = await fetch(
    `${SUB_API_URL}?user=${user}&from_second=${epoch}`
  );
  const subs = await response.json();
  console.log("API called", subs);

  if (subs.length < MAX_SUB) {
    return subs;
  }

  await sleep(API_WAIT_MSEC);
  const maxEpoch = Math.max(...subs.map((sub: any) => sub.epoch_second));
  return subs.concat(await getUserSubmissions(user, maxEpoch));
};
