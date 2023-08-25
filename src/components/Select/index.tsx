import { ReactNode } from 'react'
import { SelectContainer, SelectContainerProps } from './styles'

interface SelectProps extends SelectContainerProps {
  children: ReactNode
  icon?: ReactNode
}

export function Select(props: SelectProps) {
  const { children, icon, selected } = props

  return (
    <SelectContainer selected={selected}>
      {icon && icon}
      <span>{children}</span>
    </SelectContainer>
  )
}
