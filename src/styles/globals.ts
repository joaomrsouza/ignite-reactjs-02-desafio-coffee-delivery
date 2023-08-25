import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* TODO: Ajustar isso aqui */
    background: #1f1f1f;

    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: none;
    /* TODO: Box shadow */
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
