'use client'

import { useThemeContext } from '../../../contexts/ThemeContext'
import { Button } from './styles'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <Button
      onClick={toggleTheme}
      style={{
        marginTop: 'auto',
      }}
    >
      <img src={`/images/icon_${theme === 'dark' ? 'moon' : 'sun'}.svg`} alt="toggle theme" />
    </Button>
  )
}
