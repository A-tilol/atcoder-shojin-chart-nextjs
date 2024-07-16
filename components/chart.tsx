"use client";

import { METRICS } from "@/config/constants";
import Plotly, { Config, Layout, PlotData } from "plotly.js-dist-min";
import React, { useCallback, useEffect, useRef, useState } from "react";

export interface ChartData {
  scoreData: Partial<PlotData>[];
  acData: Partial<PlotData>[];
  period: number;
}

interface ChartProps {
  users: string[];
  chartData: ChartData;
  onChartChange: (blob: Blob) => void;
}

const Chart: React.FC<ChartProps> = ({ users, chartData, onChartChange }) => {
  const chartRef = useRef(null);
  const [metrics, setMetrics] = useState(METRICS.SCORES);
  const [maskRivalIDs, setMaskRivalIDs] = useState(false);

  const handleChartChange = useCallback(async () => {
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

    onChartChange(blob);
  }, [onChartChange]);

  useEffect(() => {
    if (!chartRef.current || chartData.period === 0) {
      return;
    }

    // select metrics data
    let data: Partial<PlotData>[] = [];
    if (metrics === METRICS.SCORES) {
      data = chartData.scoreData;
    } else if (metrics === METRICS.ACS) {
      data = chartData.acData;
    }

    // Mask rival ids
    for (const [i, d] of data.entries()) {
      if (i === 0) continue;
      if (maskRivalIDs) {
        d.name = `Rival ${i}`;
      } else {
        d.name = users[i];
      }
    }

    const layout: Partial<Layout> = {
      title: "Shojin Chart",
      legend: {
        xanchor: "left",
        yanchor: "top",
        x: 0.01,
        y: 1,
      },
      font: { family: "Courier New, monospace", size: 18 },
      xaxis: {
        dtick: chartData.period < 700 ? "M1" : "M6",
        tickformat: "%Y-%m",
        tickangle: -45,
        tickfont: {
          size: 16,
        },
      },
      yaxis: {
        title: metrics,
      },
      margin: {
        t: 60,
        l: 60,
        r: 50,
      },
      autosize: true,
      dragmode: false,
    };

    const config: Partial<Config> = {
      displayModeBar: false,
    };

    Plotly.newPlot(chartRef.current, data, layout, config);

    handleChartChange();
  }, [chartData, metrics, maskRivalIDs]);

  const handleMetricsChange = (e: any) => {
    setMetrics(e.target.value);
  };

  const handleMaskOptChange = () => {
    setMaskRivalIDs(!maskRivalIDs);
  };

  if (chartData.period === 0) {
    return <></>;
  }

  return (
    <>
      <div ref={chartRef}></div>

      <div className="mt-10">
        <div className="flex justify-center gray-800 text-2xl">
          Chart Options
        </div>
        <div className="mt-5 flex justify-center gray-800">
          <ul className="items-center w-96 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  id="metrics-radio-scores"
                  type="radio"
                  name="metrics-radio"
                  value={METRICS.SCORES}
                  checked={metrics === METRICS.SCORES}
                  onChange={handleMetricsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="metrics-radio-scores"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                >
                  Scores
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
              <div className="flex items-center ps-3">
                <input
                  id="metrics-radio-acs"
                  type="radio"
                  name="metrics-radio"
                  value={METRICS.ACS}
                  checked={metrics === METRICS.ACS}
                  onChange={handleMetricsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="metrics-radio-acs"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                >
                  ACs
                </label>
              </div>
            </li>
            {/* <li className="w-full">
              <div className="flex items-center ps-3">
                <input
                  id="metrics-radio-ratings"
                  type="radio"
                  name="metrics-radio"
                  value={METRICS.RATINGS}
                  checked={metrics === METRICS.RATINGS}
                  onChange={handleMetricsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="metrics-radio-ratings"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                >
                  Ratings
                </label>
              </div>
            </li> */}
          </ul>

          <div className="ml-6 w-40 flex items-center ps-4 border border-gray-200 rounded h-12">
            <input
              id="mask-cb"
              type="checkbox"
              defaultValue=""
              checked={maskRivalIDs}
              onChange={handleMaskOptChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="mask-cb"
              className="w-py-4 ms-2 text-sm font-medium text-gray-900"
            >
              Mask Rival IDs
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
