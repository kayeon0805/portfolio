'use client'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '../styles/theme/theme'
import GlobalStyle from '../styles/global/GlobalStyles'
import { ThemeProvider } from '../providers/ThemeProvider'

export default function ThemeClient({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeProvider>{children}</ThemeProvider>
    </StyledThemeProvider>
  )
}
