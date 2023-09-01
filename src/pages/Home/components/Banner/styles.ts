import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.12rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 3.9rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;

    color: ${({ theme }) => theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Grid = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  grid-column-gap: 2.5rem;

  li {
    width: max-content;
  }
`
