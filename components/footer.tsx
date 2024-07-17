import { GITHUB_URL, TWITTER_URL } from "@/config/constants";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-xs text-gray-500 sm:text-center">
            © 2024 atilol. All Rights Reserved.
          </span>

          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href={GITHUB_URL} className="hover:underline me-4 md:me-6">
                Github
              </a>
            </li>
            <li>
              <a
                href={TWITTER_URL}
                className="hover:underline me-4 md:me-6 flex items-center ml-5"
              >
                <FaXTwitter className="mr-1" /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
