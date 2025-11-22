import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search Something"
          className="search-input"
        />
      </div>
      <div className="header-right">
        <button className="notification-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <div className="user-profile">
          <img
            src="https://images.pexels.com/photos/34769635/pexels-photo-34769635.jpeg?auto=compress&cs=tinysrgb&h=350"
            alt="Sona Ismayilova"
            className="user-avatar"
          />
          <div className="user-info">
            <div className="user-name">Sona Ismayilova</div>
            <div className="user-email">sonaismayilova@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
