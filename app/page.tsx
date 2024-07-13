"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
// import {PlotParams} from 'react-plotly.js'
import { Config, Layout, PlotData } from "plotly.js";

const TitleHeader = () => {
  return (
    <>
      <h1 className="font-serif mb-6 text-3xl font-extrabold md:text-2xl lg:text-3xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Atcoder
        </span>{" "}
        <span className="text-gray-700">精進チャート</span>
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
    console.log(e);
    onInputChange(e.target.id, e.target.value);
  };

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="user-id-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          UserID
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
          RivalIDs
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

const Content = () => {
  let [userID, setUserID] = useState("");
  let [rivalIDs, setRivalIDs] = useState("");
  let [period, setPeriod] = useState(90);

  const data: Partial<PlotData>[] = [
    {
      type: "scatter",
      mode: "lines",
      x: [0, 1, 2, 3, 4],
      y: [10, 4, 2, 6, 7],
    },
    {
      type: "scatter",
      mode: "lines",
      x: [0, 1, 2, 3, 4],
      y: [5, 7, 8, 10, 5],
    },
  ];
  const layout: Partial<Layout> = {
    title: "Shojin Chart",
    legend: {
      title: {
        text: "Coders",
      },
    },
    margin: {
      t: 30,
      b: 0,
      l: 15,
      r: 15,
    },
  };
  const config: Partial<Config> = {
    displayModeBar: false,
  };

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

  // if press draw button, draw chart

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

        <Plot
          className="w-full mt-10"
          data={data}
          layout={layout}
          config={config}
          onHover={(data) => {
            console.log(data);
          }}
        />
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
