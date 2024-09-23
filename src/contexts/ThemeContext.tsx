'use client'

import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | null>(null)

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
