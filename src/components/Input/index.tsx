import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  relativeWidth?: number
}

export function Input(props: InputProps) {
  const { relativeWidth, ...rest } = props

  return (
    <InputContainer relativeWidth={relativeWidth}>
      <input {...rest} />
    </InputContainer>
  )
}
