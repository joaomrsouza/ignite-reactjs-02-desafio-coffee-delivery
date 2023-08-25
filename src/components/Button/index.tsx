import { HTMLAttributes, ReactNode } from 'react'
import {
  ButtonIconContainer,
  ButtonPrimaryContainer,
  ButtonSecondaryContainer,
} from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon'
  children?: ReactNode
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', ...rest } = props

  if (variant === 'secondary') {
    return (
      <ButtonSecondaryContainer {...rest}>{children}</ButtonSecondaryContainer>
    )
  }

  if (variant === 'icon') {
    return <ButtonIconContainer {...rest}>{children}</ButtonIconContainer>
  }

  return <ButtonPrimaryContainer {...rest}>{children}</ButtonPrimaryContainer>
}
