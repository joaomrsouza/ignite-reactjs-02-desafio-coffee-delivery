import styled from 'styled-components'

const BaseButtonContainer = styled.button`
  border: 0;
  border-radius: 6px;

  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  text-transform: uppercase;
`

export const ButtonPrimaryContainer = styled(BaseButtonContainer)`
  width: 100%;
  padding: 0.75rem 0.5rem;

  display: flex;

  font-size: 0.875rem;
  line-height: 1.4;
  font-weight: bold;

  background: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`

export const ButtonSecondaryContainer = styled(BaseButtonContainer)`
  width: 100%;
  padding: 0 0.5rem;

  display: inline-flex;

  font-size: 0.75rem;
  line-height: 1.2;
  font-weight: normal;

  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`

export const ButtonIconContainer = styled(BaseButtonContainer)`
  width: min-content;
  padding: 0.5rem;

  display: inline-flex;

  background: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme['base-card']};

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
