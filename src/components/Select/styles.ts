import styled from 'styled-components'

export interface SelectContainerProps {
  selected?: boolean
}

export const SelectContainer = styled.button<SelectContainerProps>`
  width: 100%;
  border: 1px solid
    ${({ theme, selected }) => (selected ? theme.purple : 'transparent')};
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  line-height: 1.2;
  text-transform: uppercase;

  background: ${({ theme, selected }) =>
    selected ? theme['purple-light'] : theme['base-button']};
  color: ${({ theme }) => theme.purple};

  transition:
    background 0.1s,
    color 0.1s;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};

    & > span {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }

  & > span {
    color: ${({ theme }) => theme['base-text']};
  }

  & > svg {
    width: 1rem;
    height: 1rem;
  }
`
