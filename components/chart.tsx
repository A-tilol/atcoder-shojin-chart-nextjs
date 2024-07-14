"use client";

import dynamic from "next/dynamic";
import { Config, Layout } from "plotly.js";
import Plotly from "plotly.js-dist-min";
import React, { useEffect, useRef } from "react";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export interface ChartData {
  data: any[];
  period: number;
  metrics: string;
}

interface ChartProps {
  chartData: any;
}

const Chart: React.FC<ChartProps> = ({ chartData }) => {
  const chartRef = useRef(null);

  const layout: Partial<Layout> = {
    title: "Shojin Chart",
    legend: { title: { text: "Coders" } },
    font: { family: "Courier New, monospace", size: 18, color: "Gray" },
    xaxis: {
      dtick: chartData.period < 700 ? "M1" : "M6",
      tickformat: "%Y-%m",
      tickangle: -45,
    },
    autosize: true,
    margin: {
      t: 35,
      // b: 0,
      l: 50,
      r: 15,
    },
  };

  const config: Partial<Config> = {
    displayModeBar: false,
  };

  const text = `今日の{UserID}さんの精進は10AC+1000点獲得だにゃん🐾 {cheeringWord}にゃ！

  ACした問題の最高難度は500点！(ABC D)
  https://atilol.atcoder-shojin-shart-nextjs.github.io
  #AtCoder_Shojin_Chart`;

  useEffect(() => {
    if (chartRef.current && chartData.data !== undefined) {
      Plotly.newPlot(chartRef.current, chartData.data, layout, config);
    }
  }, [chartData]);

  const handleCopyToClipboard = async () => {
    if (chartRef.current) {
      const imageData = await Plotly.toImage(chartRef.current, {
        format: "png",
        width: 600,
        height: 400,
      });

      const response = await fetch(imageData);
      const blob = await response.blob();

      const clipboardItem = new ClipboardItem({
        "image/png": blob,
      });
      navigator.clipboard
        .write([clipboardItem])
        .then(() => console.log("copied."))
        .catch((error) => {
          console.error("クリップボードにコピーできませんでした。", error);
        });
    }
  };

  if (chartData.data === undefined) {
    return <></>;
  }

  return (
    <>
      <div ref={chartRef} onClick={handleCopyToClipboard}></div>
    </>
  );
};

export default Chart;
