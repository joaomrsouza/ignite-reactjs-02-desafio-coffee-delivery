import { ShoppingCart } from '@phosphor-icons/react'
import { CartBadge, CartContainer } from './styles'

export function Cart() {
  return (
    <>
      <CartContainer>
        <ShoppingCart />
      </CartContainer>
      <CartBadge>3</CartBadge>
    </>
  )
}
