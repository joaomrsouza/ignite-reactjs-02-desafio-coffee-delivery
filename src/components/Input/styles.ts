import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  color: ${({ theme }) => theme['base-text']};

  font-size: 0.875rem;
  line-height: 1.1375;

  &:has(> input:not(:required))::after {
    content: 'Opcional';

    margin-right: 0.75rem;

    color: ${({ theme }) => theme['base-label']};

    font-size: 0.75rem;
    line-height: 0.975;
    font-style: italic;
  }

  input {
    flex: 1;

    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${({ theme }) => theme['base-input']};
    color: inherit;

    font-size: inherit;
    line-height: inherit;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border-color: ${({ theme }) => theme['yellow-dark']};
    }

    &:not(:required) {
      margin-right: -3.6875rem;
    }
  }
`
