"use client"

import { useState } from "react"
import { FaChartLine, FaBars, FaSearch } from "react-icons/fa"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <FaBars />
            </button>
            <a href="/" className="logo">
              <FaChartLine className="logo-icon" />
              <span className="logo-text">Stock4U</span>
              <span className="logo-text-kr">(스톡포유)</span>
            </a>
            <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
              <a href="/" className="nav-link active">
                Dashboard
              </a>
              <a href="#" className="nav-link">
                Watchlist
              </a>
              <a href="#" className="nav-link">
                News
              </a>
              <a href="#" className="nav-link">
                Analysis
              </a>
            </nav>
          </div>
          <div className="header-right">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input type="text" className="search-input" placeholder="Search stocks..." />
            </div>
            <div className="auth-buttons">
              <button className="btn btn-outline">Sign In</button>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

