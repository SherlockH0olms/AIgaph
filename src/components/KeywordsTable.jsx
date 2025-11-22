import React from 'react'
import './KeywordsTable.css'

const KeywordsTable = () => {
  const keywords = [
    {
      keyword: 'Blockchain',
      growth: 45,
      growthPositive: true,
      searchVolume: 48,
      category: 'Finance',
      competition: 'low'
    },
    {
      keyword: 'AI',
      growth: 76,
      growthPositive: true,
      searchVolume: 48,
      category: 'Hackathon',
      competition: 'low'
    },
    {
      keyword: 'Cryptocurrency',
      growth: 21,
      growthPositive: true,
      searchVolume: 48,
      category: 'Finance',
      competition: 'low'
    },
    {
      keyword: 'Cybersecurity',
      growth: 32,
      growthPositive: true,
      searchVolume: 48,
      category: 'Tech',
      competition: 'low'
    },
    {
      keyword: 'Machine Learning',
      growth: 8,
      growthPositive: false,
      searchVolume: 48,
      category: 'Hackathon',
      competition: 'medium'
    },
    {
      keyword: 'Fintech',
      growth: 32,
      growthPositive: true,
      searchVolume: 48,
      category: 'Finance',
      competition: 'medium'
    },
    {
      keyword: 'E-learning',
      growth: 54,
      growthPositive: true,
      searchVolume: 48,
      category: 'Education',
      competition: 'medium'
    }
  ]

  const renderSearchVolumeBar = (volume) => {
    const width = `${volume}%`
    return (
      <div className="search-volume-container">
        <div className="search-volume-bar" style={{ width }}>
          <div className="search-volume-fill"></div>
        </div>
        <span className="search-volume-text">{volume}%</span>
      </div>
    )
  }

  const renderCompetitionBadge = (competition) => {
    return (
      <span className={`competition-badge ${competition}`}>
        {competition}
      </span>
    )
  }

  return (
    <div className="keywords-table">
      <div className="table-header">
        <h3>Top Keywords</h3>
        <select className="time-filter">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Growth</th>
              <th>Search Volume</th>
              <th>Category</th>
              <th>Competition</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((item, index) => (
              <tr key={index}>
                <td className="keyword-cell">{item.keyword}</td>
                <td className="growth-cell">
                  <div className="growth-container">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={item.growthPositive ? 'growth-up' : 'growth-down'}
                    >
                      {item.growthPositive ? (
                        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                      ) : (
                        <polyline points="23,18 13.5,8.5 8.5,13.5 1,6"/>
                      )}
                    </svg>
                    <span className={item.growthPositive ? 'growth-up' : 'growth-down'}>
                      {item.growth}%
                    </span>
                  </div>
                </td>
                <td className="search-volume-cell">
                  {renderSearchVolumeBar(item.searchVolume)}
                </td>
                <td className="category-cell">{item.category}</td>
                <td className="competition-cell">
                  {renderCompetitionBadge(item.competition)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default KeywordsTable
