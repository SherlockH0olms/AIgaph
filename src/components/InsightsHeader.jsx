import React from 'react'
import './InsightsHeader.css'

const InsightsHeader = () => {
  const categories = [
    'All time',
    'RemoteWork',
    'CustomerService',
    'Technology',
    'TechInnovation',
    'ShippingDelays',
    'Restaurant'
  ]

  return (
    <div className="insights-header">
      <div className="header-top">
        <div className="title-section">
          <h1>Explore Market Insights</h1>
          <p>Find trending pain points, business opportunities, and customer needs in your desired sector.</p>
        </div>
        <div className="time-filter">
          <select className="time-select">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
          </svg>
        </div>
      </div>
      
      <div className="search-section">
        <div className="search-bar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Search Keyword" />
          <button className="search-btn">Search</button>
        </div>
        <div className="filter-buttons">
          <button className="filter-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"/>
            </svg>
          </button>
          <button className="filter-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"/>
              <line x1="8" y1="12" x2="21" y2="12"/>
              <line x1="8" y1="18" x2="21" y2="18"/>
              <line x1="3" y1="6" x2="3.01" y2="6"/>
              <line x1="3" y1="12" x2="3.01" y2="12"/>
              <line x1="3" y1="18" x2="3.01" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="category-tags">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-tag ${index === 0 ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default InsightsHeader
