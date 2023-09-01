import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 0 10rem 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`

export const DeliveryFormPaymentContainer = styled.div`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OrderSummaryContainer = styled.div`
  width: 100%;
  max-width: 28rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  line-height: 1.4625rem;
  font-weight: bold;
  font-family: 'Baloo 2', cursive;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const Container = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${({ theme }) => theme['base-card']};
`

interface HeaderContainerProps {
  iconColor: 'yellow-dark' | 'purple'
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;

    color: ${({ theme, iconColor }) => theme[iconColor]};
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.12rem;

  h3 {
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: normal;

    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.137rem;

    color: ${({ theme }) => theme['base-text']};
  }
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
