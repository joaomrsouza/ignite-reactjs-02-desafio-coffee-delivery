import styled from 'styled-components'

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${({ theme }) => theme['base-text']};
`

export interface IconCircleProps {
  background: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const IconCircle = styled.div<IconCircleProps>`
  padding: 0.5rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme, background }) => theme[background]};
  color: ${({ theme }) => theme['base-background']};

  svg {
    width: 1rem;
    height: 1rem;
  }
`
