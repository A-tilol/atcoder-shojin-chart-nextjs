"use client";

import { METRICS, RATE_BORDER, RATE_COLOR } from "@/config/constants";
import { colorCodeToRGBA } from "@/utils/utils";
import Plotly, { Config, Layout, PlotData } from "plotly.js-dist-min";
import React, { useCallback, useEffect, useRef, useState } from "react";

export interface ChartData {
  scoreData: Partial<PlotData>[];
  acData: Partial<PlotData>[];
  ratingData: Partial<PlotData>[];
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
    } else if (metrics === METRICS.RATINGS) {
      data = chartData.ratingData;
    }

    // Mask rival ids
    for (const [i, d] of data.entries()) {
      if (i === 0) continue;
      if (maskRivalIDs) {
        d.name = `rival_${i}`;
      } else {
        d.name = users[i];
      }
    }

    const layout: Partial<Layout> = {
      title: `Shojin Chart [${metrics}]`,
      legend: {
        xanchor: "left",
        yanchor: "top",
        x: 0.01,
        y: 1,
        bgcolor: "rgba(255,255,255,0.3)",
      },
      plot_bgcolor: "rgba(200, 200, 200, 0.15)",
      font: { family: "Courier New, monospace", size: 16 },
      xaxis: {
        automargin: true,
        tickformat: "%Y\n%m-%d",
        tickangle: -45,
        tickfont: {
          size: 12,
        },
      },
      yaxis: {
        automargin: true,
        tickangle: -45,
        tickfont: {
          size: 12,
        },
      },
      margin: {
        t: 60,
        l: 0,
        r: 0,
      },
      autosize: true,
      dragmode: false,
    };

    // Background Color for Rating
    if (metrics === METRICS.RATINGS) {
      const [lowerLim, upperLim] = (() => {
        let minRate = 10 ** 4;
        let maxRate = 0;
        for (const d of data) {
          minRate = Math.min(minRate, Math.min(...(d.y as number[])));
          maxRate = Math.max(maxRate, Math.max(...(d.y as number[])));
        }
        const lowerLim = Math.max(0, Math.floor(minRate / 100) * 100 - 100);
        const upperLim = Math.ceil(maxRate / 100) * 100 + 230;
        return [lowerLim, upperLim];
      })();

      layout.shapes = Object.keys(RATE_COLOR)
        .filter((rc: string) => {
          const border = RATE_BORDER[rc];
          if (border + 400 <= lowerLim || border > upperLim) {
            return false;
          }
          return true;
        })
        .map((rc: string) => {
          return {
            type: "rect",
            xref: "paper",
            yref: "y",
            x0: 0,
            y0: Math.max(RATE_BORDER[rc], lowerLim),
            x1: 1,
            y1:
              rc === "RED"
                ? upperLim
                : Math.min(RATE_BORDER[rc] + 400, upperLim),
            fillcolor: colorCodeToRGBA(RATE_COLOR[rc], 0.3),
            line: {
              width: 0,
            },
            layer: "below",
          };
        });
    }

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

      <div className="mt-6">
        <div className="flex justify-center gray-800 text-2xl">
          Chart Options
        </div>
        <div className="mt-5 flex justify-center gray-800">
          <ul className="items-center w-72 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
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
            <li className="w-full">
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
            </li>
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
