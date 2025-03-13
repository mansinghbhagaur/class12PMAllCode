import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'

const ThemeColor = {
  light: {
    color: 'black',
    background: '#ffffff',
  },
  dark: {
    color: 'white',
    background: 'black',
  }
}


const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div style={{
      color: ThemeColor[theme].color,
      backgroundColor: ThemeColor[theme].background,
      height: '100vh'
    }}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
