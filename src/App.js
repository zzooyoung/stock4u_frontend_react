import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// import
import Header from "./components/Header";
import StockList from './components/StockList';
import Footer from './components/Footer';

// Temp Data Import
import stocks from "./data/stocks"

function App() {
  const [activeTab, setActiveTab] = useState("all")

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const filteredStocks = activeTab === "all" ? stocks : stocks.filter((stock) => stock.category === activeTab)

  return (
    <Router>
      <div className="app">
        <Header onTabChange={handleTabChange} activeTab={activeTab} />
        <main className="main-content">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">Stock Predictions</h1>
              <div className="tabs">
                <button className={`tab ${activeTab === "all" ? "active" : ""}`} onClick={() => handleTabChange("all")}>
                  All
                </button>
                <button className={`tab ${activeTab === "tech" ? "active" : ""}`} onClick={() => handleTabChange("tech")}>
                  Tech
                </button>
                <button
                  className={`tab ${activeTab === "finance" ? "active" : ""}`}
                  onClick={() => handleTabChange("finance")}
                >
                  Finance
                </button>
                <button
                  className={`tab ${activeTab === "energy" ? "active" : ""}`}
                  onClick={() => handleTabChange("energy")}
                >
                  Energy
                </button>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<StockList stocks={filteredStocks} />} />
              <Route path="/tech" element={<StockList stocks={stocks.filter(stock => stock.category === "tech")} />} />
              <Route path="/finance" element={<StockList stocks={stocks.filter(stock => stock.category === "finance")} />} />
              <Route path="/energy" element={<StockList stocks={stocks.filter(stock => stock.category === "energy")} />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
