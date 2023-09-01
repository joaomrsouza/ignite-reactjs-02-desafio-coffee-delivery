import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  font-size: 0.875rem;
  line-height: 1.1375;

  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
`
