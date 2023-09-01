import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  padding: 2rem 0 9.81rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.13rem;

  h2 {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const ProductList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 1.25rem;
`
