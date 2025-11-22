import React from 'react'
import './InsightsStats.css'

const InsightsStats = () => {
  return (
    <div className="insights-stats">
      <div className="stats-card">
        <div className="stats-header">
          <h3>Total Insight</h3>
          <div className="chart-icon">
            <svg width="60" height="30" viewBox="0 0 60 30">
              <path
                d="M5,25 Q15,15 25,20 T45,10 T55,5"
                stroke="#28a745"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="stats-number">
          <span className="number">8,234</span>
          <span className="label">data scanned</span>
        </div>
      </div>

      <div className="insights-breakdown">
        <div className="breakdown-item">
          <div className="breakdown-number">1</div>
          <div className="breakdown-content">
            <div className="percentage">48%</div>
            <div className="category">Health & Wellness</div>
            <div className="description">Focused on fitness, healthcare products, and wellness apps.</div>
          </div>
        </div>

        <div className="breakdown-item">
          <div className="breakdown-number">2</div>
          <div className="breakdown-content">
            <div className="percentage">35%</div>
            <div className="category">Technology</div>
            <div className="description">Driven by AI, cloud computing, and innovation in tech.</div>
          </div>
        </div>

        <div className="breakdown-item">
          <div className="breakdown-number">3</div>
          <div className="breakdown-content">
            <div className="percentage">16%</div>
            <div className="category">Other</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsightsStats
