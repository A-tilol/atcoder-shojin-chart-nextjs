import dynamic from "next/dynamic";
import { Config, Layout } from "plotly.js";
import React from "react";
// import Plot from "react-plotly.js";

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
  if (chartData.data === undefined) {
    return <></>;
  }

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
      t: 30,
      // b: 0,
      l: 50,
      r: 15,
    },
  };

  const config: Partial<Config> = {
    displayModeBar: false,
  };

  return (
    <Plot
      className="w-full"
      data={chartData.data}
      layout={layout}
      config={config}
    />
  );
};

export default Chart;
