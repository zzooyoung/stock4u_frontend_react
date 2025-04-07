"use client"

import { useRef } from "react"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js"
import { Line } from "react-chartjs-2"

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

function StockChart({ data }) {
  const chartRef = useRef(null)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return `${date.getMonth() + 1}/${date.getDate()}`
  }

  const chartData = {
    labels: data.map((item) => formatDate(item.date)),
    datasets: [
      {
        fill: true,
        label: "Price",
        data: data.map((item) => item.price),
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
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: (value) => "$" + value,
          font: {
            size: 10,
          },
        },
      },
    },
  }

  return (
    <div className="chart-wrapper">
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  )
}

export default StockChart

