import styled from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  background: ${({ theme }) => theme['base-card']};
`

export const ContentContainer = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const TitleActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.h3`
  font-size: 1rem;
  line-height: 1.3rem;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Price = styled.div`
  font-size: 1rem;
  line-height: 1.3rem;
  font-weight: bold;

  color: ${({ theme }) => theme['base-text']};
`
