import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background: ${({ theme }) => theme['base-card']};
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  display: block;

  background: ${({ theme }) => theme['base-button']};
`

export const PriceSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.875rem;
    line-height: 1.1375rem;

    color: ${({ theme }) => theme['base-text']};

    span {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    &.total {
      font-size: 1.25rem;
      line-height: 1.625rem;
      font-weight: bold;

      color: ${({ theme }) => theme['base-subtitle']};

      span {
        font-size: inherit;
        line-height: inherit;
      }
    }
  }
`
