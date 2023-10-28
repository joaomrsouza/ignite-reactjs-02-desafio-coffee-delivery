import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  relativeWidth?: number
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { relativeWidth, ...rest } = props

    return (
      <InputContainer relativeWidth={relativeWidth}>
        <input {...rest} ref={ref} />
      </InputContainer>
    )
  },
)
