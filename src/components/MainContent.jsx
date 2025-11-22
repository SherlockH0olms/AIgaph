import React from 'react'
import InsightsHeader from './InsightsHeader'
import InsightsStats from './InsightsStats'
import KeywordsTable from './KeywordsTable'
import './MainContent.css'

const MainContent = () => {
  return (
    <main className="main-content">
      <InsightsHeader />
      <div className="content-grid">
        <div className="left-section">
          <KeywordsTable />
        </div>
        <div className="right-section">
          <InsightsStats />
        </div>
      </div>
    </main>
  )
}

export default MainContent
