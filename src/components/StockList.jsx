import StockCard from "./StockCard"

function StockList({ stocks }) {
  return (
    <div className="stock-grid">
      {stocks.map((stock) => (
        <StockCard key={stock.symbol} stock={stock} />
      ))}
    </div>
  )
}

export default StockList

