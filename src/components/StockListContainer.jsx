import React, { useEffect, useState } from "react"
import StockList from "./StockList"

function StockListContainer() {
  const [stocks, setStocks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:15000/stock-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tickers: ["AAPL", "NVDA", "AMZN"] }),
        })

        const stockData = await response.json()

        const predictionResponse = await fetch("http://localhost:15000/predict", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tickers: ["AAPL", "NVDA", "AMZN"] }),
        })

        const predictionData = await predictionResponse.json()

        // 🔗 예측 정보 병합
        const combined = ["AAPL", "NVDA", "AMZN"].map((symbol) => {
          const chartData = stockData.filter((item) => item.symbol === symbol)
          const prediction = predictionData.find((p) => p.symbol === symbol)

          return {
            symbol,
            name: symbol, // 필요시 실제 이름 매핑 가능
            currentPrice: chartData[chartData.length - 1]?.close ?? 0,
            change: chartData[chartData.length - 1]?.close - chartData[chartData.length - 2]?.close ?? 0,
            changePercent:
              ((chartData[chartData.length - 1]?.close - chartData[chartData.length - 2]?.close) /
                chartData[chartData.length - 2]?.close) *
                100 ?? 0,
            data: chartData,
            prediction: prediction ?? null,
          }
        })

        setStocks(combined)
      } catch (error) {
        console.error("❌ 데이터 요청 실패:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>📦 로딩 중...</p>

  return <StockList stocks={stocks} />
}

export default StockListContainer