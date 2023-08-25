import { CreditCard } from '@phosphor-icons/react'
import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { Cart } from './components/Cart'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Button>Label</Button>
        <Button variant="secondary">Label</Button>
        <Button variant="icon">Label</Button>
        <Cart />
        <Select icon={<CreditCard />}>Cartão de crédito</Select>
        <Select selected icon={<CreditCard />}>
          Cartão de crédito
        </Select>
        <Input placeholder="Label" />
        <Input required />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
