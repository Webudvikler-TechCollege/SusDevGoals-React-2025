import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styled/Global.styled.js'
import { ThemeProvider } from 'styled-components'
import { theme } from './styled/Theme.styled.js'
import { BrowserRouter } from 'react-router-dom'
import { ModeProvider } from './providers/ModeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>,
)
