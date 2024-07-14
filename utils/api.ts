import { sleep } from "./utils";

const SUB_API_URL =
  "https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions";
const MAX_SUB = 500;
export const WAIT_MSEC = 1000;

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

  await sleep(WAIT_MSEC);
  const maxEpoch = Math.max(...subs.map((sub: any) => sub.epoch_second));
  return subs.concat(await getUserSubmissions(user, maxEpoch));
};
