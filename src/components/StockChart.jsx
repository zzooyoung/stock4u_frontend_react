"use client"

import { useRef } from "react"
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

function StockChart({ data }) {
  const chartRef = useRef(null)

  // 실제 날짜가 있다면 여기서 포맷 가능
  const labels = data.map((_, index) => `Day ${index + 1}`)

  const chartData = {
    labels,
    datasets: [
      {
        label: "Close Price",
        data: data.map((item) => item.close),
        fill: true,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 } },
      },
      y: {
        grid: { color: "rgba(0, 0, 0, 0.05)" },
        ticks: {
          font: { size: 10 },
          callback: (value) => `$${value}`,
        },
      },
    },
  }

  return (
    <div className="chart-wrapper" style={{ height: "200px" }}>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  )
}

export default StockChart