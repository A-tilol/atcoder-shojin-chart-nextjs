"use client";

import { Config, Layout } from "plotly.js";
import Plotly from "plotly.js-dist-min";
import React, { useEffect, useRef } from "react";

export interface ChartData {
  data: any[];
  period: number;
  metrics: string;
}

interface ChartProps {
  chartData: ChartData;
  onChartChange: (blob: Blob) => void;
}

const Chart: React.FC<ChartProps> = ({ chartData, onChartChange }) => {
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
    yaxis: {
      title: "Score",
    },
    autosize: true,
    margin: {
      t: 35,
      r: 50,
    },
  };

  const config: Partial<Config> = {
    displayModeBar: false,
  };

  useEffect(() => {
    if (chartRef.current && chartData.data !== undefined) {
      Plotly.newPlot(chartRef.current, chartData.data, layout, config);
      handleChartChange();
    }
  }, [chartData]);

  const handleChartChange = async () => {
    if (!chartRef.current) {
      return;
    }

    const imageData = await Plotly.toImage(chartRef.current, {
      format: "png",
      width: 600,
      height: 400,
    });
    const response = await fetch(imageData);
    const blob = await response.blob();

    console.log(blob);
    onChartChange(blob);
  };

  if (chartData.period === 0) {
    return <></>;
  }

  return (
    <>
      <div ref={chartRef}></div>
    </>
  );
};

export default Chart;
