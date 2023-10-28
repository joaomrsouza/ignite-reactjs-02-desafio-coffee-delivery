import { ButtonHTMLAttributes, ReactNode } from 'react'
import { SelectContainer, SelectContainerProps } from './styles'

interface SelectProps
  extends SelectContainerProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
}

export function Select(props: SelectProps) {
  const { children, icon, selected, ...rest } = props

  return (
    <SelectContainer type="button" selected={selected} {...rest}>
      {icon && icon}
      <span>{children}</span>
    </SelectContainer>
  )
}
