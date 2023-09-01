import styled from 'styled-components'

export const ConfirmedContainer = styled.div`
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;

    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.38rem;
`

export const DeliverySummaryContainerBorder = styled.div`
  padding: 1px;
  border-radius: 6px 44px;

  background: ${({ theme }) => theme.yellow};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.yellow} 0%,
    ${({ theme }) => theme.purple} 100%
  );
`

export const DeliverySummaryContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${({ theme }) => theme['base-background']};
`
