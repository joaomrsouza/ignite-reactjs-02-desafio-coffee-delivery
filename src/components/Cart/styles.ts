import styled from 'styled-components'

export const CartContainer = styled.button`
  /* width: 2.375rem;
  height: 2.375rem; */
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};

  cursor: pointer;

  & > svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`

export const CartBadge = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -1.5rem;
  right: 0.75rem;

  background: ${({ theme }) => theme['yellow-dark']};
  color: ${({ theme }) => theme.white};

  font-size: 0.75rem;
  line-height: 0.975;
  font-weight: bold;
  text-align: center;
`
