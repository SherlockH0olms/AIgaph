import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ChatWidget from './components/ChatWidget'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-container">
        <Header />
        <MainContent />
      </div>
      <ChatWidget />
    </div>
  )
}

export default App
