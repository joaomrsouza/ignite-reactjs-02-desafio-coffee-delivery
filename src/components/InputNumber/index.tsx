import { Minus, Plus } from '@phosphor-icons/react'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { InputNumberButton, InputNumberContainer } from './styles'

interface InputNumberProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (newValue: number) => void
}

export function InputNumber(props: InputNumberProps) {
  const [value, setValue] = useState(props.value ? Number(props.value) : 0)

  function handleIncrement() {
    setValue((st) => {
      const { max } = props
      if (max !== '' && st + 1 > Number(max)) return st
      props.onChange?.(st + 1)
      return st + 1
    })
  }

  function handleDecrement() {
    setValue((st) => {
      const { min } = props
      if (min !== '' && st - 1 < Number(min)) return st
      props.onChange?.(st - 1)
      return st - 1
    })
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value)
    const min = Number(props.min)
    const max = Number(props.max)

    if (min !== undefined && newValue < min) return
    if (max !== undefined && newValue > max) return

    setValue(newValue)
    props.onChange?.(newValue)
  }

  return (
    <InputNumberContainer>
      <InputNumberButton type="button" onClick={handleDecrement}>
        <Minus />
      </InputNumberButton>
      <input
        inputMode="numeric"
        {...props}
        value={value}
        onChange={handleChange}
      />
      <InputNumberButton type="button" onClick={handleIncrement}>
        <Plus />
      </InputNumberButton>
    </InputNumberContainer>
  )
}
