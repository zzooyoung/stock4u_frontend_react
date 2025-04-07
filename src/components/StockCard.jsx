import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import StockChart from "./StockChart"

function StockCard({ stock }) {
  const { symbol, name, currentPrice, change, changePercent, prediction, data } = stock

  const isPositive = change >= 0

  return (
    <div className="stock-card">
      <div className="stock-card-header">
        <div className="stock-info">
          <h3 className="stock-symbol">{symbol}</h3>
          <p className="stock-name">{name}</p>
        </div>
        <div className="stock-price">
          <div className="current-price">${currentPrice.toFixed(2)}</div>
          <div className={`price-change ${isPositive ? "positive" : "negative"}`}>
            {isPositive ? <FaArrowUp className="arrow-icon" /> : <FaArrowDown className="arrow-icon" />}
            <span>
              {isPositive ? "+" : ""}
              {change.toFixed(2)} ({changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
      <div className="stock-chart-container">
        <StockChart data={data} />
      </div>
      <div className="prediction-container">
        <h4 className="prediction-title">Tomorrow's Prediction</h4>
        <div className="prediction-values">
          <div className="prediction-item">
            <span className="prediction-label">Close</span>
            <span className="prediction-value">${prediction.close.toFixed(2)}</span>
          </div>
          <div className="prediction-item">
            <span className="prediction-label">High</span>
            <span className="prediction-value">${prediction.high.toFixed(2)}</span>
          </div>
          <div className="prediction-item">
            <span className="prediction-label">Low</span>
            <span className="prediction-value">${prediction.low.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockCard

