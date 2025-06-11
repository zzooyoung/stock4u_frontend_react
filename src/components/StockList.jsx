import StockCard from "./StockCard"

function StockList({ stocks }) {
  return (
    <div className="stock-grid">
      {stocks.map((stock, index) => (
        <StockCard key={index} stock={stock} />
      ))}
    </div>
  )
}

export default StockList