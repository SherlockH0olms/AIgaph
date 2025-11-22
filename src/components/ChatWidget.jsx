import React from 'react'
import './ChatWidget.css'

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <div className="chat-header">
        <div className="chat-avatar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="chat-info">
          <div className="chat-title">Chat with AI</div>
          <div className="chat-status">24|7</div>
        </div>
      </div>
      <button className="ask-ai-btn">Ask AI</button>
    </div>
  )
}

export default ChatWidget
