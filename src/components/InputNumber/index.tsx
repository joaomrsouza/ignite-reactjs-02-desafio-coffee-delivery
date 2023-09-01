import { Minus, Plus } from '@phosphor-icons/react'
import { InputHTMLAttributes, useRef } from 'react'
import { InputNumberButton, InputNumberContainer } from './styles'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputNumber(props: InputNumberProps) {
  // TODO: Transformar isso num controlled component e customizar o onChange

  const inputRef = useRef<HTMLInputElement>(null)

  function handleIncrement() {
    if (!inputRef.current) return
    const newValue = Number(inputRef.current?.value) + 1
    const max = inputRef.current.max

    if (max !== '' && newValue > Number(max)) return

    inputRef.current.value = String(newValue)
  }

  function handleDecrement() {
    if (!inputRef.current) return
    const newValue = Number(inputRef.current?.value) - 1
    const min = inputRef.current.min

    if (min !== '' && newValue < Number(min)) return

    inputRef.current.value = String(newValue)
  }

  return (
    <InputNumberContainer>
      <InputNumberButton type="button" onClick={handleDecrement}>
        <Minus />
      </InputNumberButton>
      <input inputMode="numeric" ref={inputRef} {...props} />
      <InputNumberButton type="button" onClick={handleIncrement}>
        <Plus />
      </InputNumberButton>
    </InputNumberContainer>
  )
}
