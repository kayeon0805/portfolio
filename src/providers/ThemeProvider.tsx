import React, { ReactNode, useEffect, useState } from 'react'
import { Theme, ThemeContext } from '../contexts/ThemeContext'

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme')
    return (storedTheme as Theme) || 'dark'
  })

  useEffect(() => {
    console.log('theme', theme)
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
