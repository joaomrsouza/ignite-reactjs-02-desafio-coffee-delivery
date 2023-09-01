import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  width: 16rem;
  padding: 1.25rem;
  margin-top: 1.25rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme['base-card']};

  img {
    margin: -2.5rem 0 0.75rem 0;
  }
`

export const TagList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const Tag = styled.li`
  padding: 0.25rem 0.5rem;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};

  font-size: 0.625rem;
  line-height: 0.812rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const Title = styled.h3`
  margin: 1rem 0 0.5rem 0;

  font-size: 1.25rem;
  line-height: 1.625rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Baloo 2', cursive;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.137rem;
  text-align: center;

  color: ${({ theme }) => theme['base-label']};
`

export const BuyContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.span`
  font-size: 0.875rem;
  line-height: 1.1375rem;
  text-align: right;

  color: ${({ theme }) => theme['base-text']};

  span {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: inherit;
    font-family: 'Baloo 2', cursive;
  }
`

export const ActionsForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
