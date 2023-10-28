import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/theme/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
import { CheckoutContextProvider } from './contexts/CheckoutContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <CheckoutContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CheckoutContextProvider>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
