import StockChart from "./StockChart"

function StockCard({ stock }) {
  const { symbol, data, prediction } = stock

  const latest = data[data.length - 1]
  const open = latest?.open || 0
  const close = latest?.close || 0
  const change = close - open
  const changePercent = open !== 0 ? (change / open) * 100 : 0
  const isPositive = change >= 0

  return (
    <div className="stock-card">
      <div className="stock-card-header">
        <div className="stock-info">
          <h3 className="stock-symbol">{symbol}</h3>
        </div>
        <div className="stock-price">
          <div className="current-price">${close.toFixed(2)}</div>
          <div className={`price-change ${isPositive ? "positive" : "negative"}`}>
            {isPositive ? "▲" : "▼"} {change.toFixed(2)} ({changePercent.toFixed(2)}%)
          </div>
        </div>
      </div>

      <div className="stock-chart-container">
        <StockChart data={data} />
      </div>

      {/* ✅ 예측값 출력 - 숫자 변환 및 존재 여부 체크 */}
      {prediction && (
        <div className="prediction-container">
          <h4 className="prediction-title">📊 Tomorrow's Prediction</h4>
          <div className="prediction-values">
            <div className="prediction-item">
              <span className="prediction-label">Close</span>
              <span className="prediction-value">
                ${Number(prediction.predicted_close || 0).toFixed(2)}
              </span>
            </div>
            <div className="prediction-item">
              <span className="prediction-label">High</span>
              <span className="prediction-value">
                ${Number(prediction.predicted_high || 0).toFixed(2)}
              </span>
            </div>
            <div className="prediction-item">
              <span className="prediction-label">Low</span>
              <span className="prediction-value">
                ${Number(prediction.predicted_low || 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StockCard