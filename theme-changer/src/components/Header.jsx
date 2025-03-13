import React, { useState } from 'react'

const Header = ({ theme, setTheme }) => {
      console.log(theme)
      return (
            <>
                  <nav id="navbar-main">
                        <h1>logo</h1>
                        <ul>
                              <li>Home</li>
                              <li>About</li>
                        </ul>
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
                  </nav >
            </>
      )
}

export default Header
