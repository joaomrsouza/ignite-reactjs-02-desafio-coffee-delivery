import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { CartBadge, CartContainer } from './styles'

export function Cart() {
  const { cartProducts } = useContext(CartContext)

  const totalItems = Array.from(cartProducts.values()).reduce(
    (acc, cur) => acc + cur,
    0,
  )

  return (
    <NavLink to="/checkout">
      <CartContainer>
        <ShoppingCart weight="fill" />
      </CartContainer>
      {totalItems !== 0 && <CartBadge>{totalItems}</CartBadge>}
    </NavLink>
  )
}
