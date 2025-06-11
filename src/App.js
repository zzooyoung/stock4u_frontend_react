import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import StockListContainer from "./components/StockListContainer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <div className="container">
            <div className="page-header">
              <h1 className="page-title">📈 Stock Predictions</h1>
            </div>
            <Routes>
              <Route path="/" element={<StockListContainer />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App