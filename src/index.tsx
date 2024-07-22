import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from './providers/ThemeProvider'
import { theme } from './styles/theme/theme'
import GlobalStyle from './styles/global/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StyledThemeProvider theme={theme}>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StyledThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
