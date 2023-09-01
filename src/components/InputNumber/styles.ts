import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  width: fit-content;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background: ${({ theme }) => theme['base-button']};

  input {
    width: 1.875rem;
    display: inline-block;

    text-align: center;

    flex: 1;
    border: 0;

    background: ${({ theme }) => theme['base-button']};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`

export const InputNumberButton = styled.button`
  padding: 0;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme.purple};

  &:hover {
    color: ${({ theme }) => theme['purple-dark']};
  }
`
