import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Product } from '../../data/products'
import { Button } from '../Button'
import { InputNumber } from '../InputNumber'
import {
  ActionsContainer,
  CartItemContainer,
  ContentContainer,
  Price,
  Title,
  TitleActionsContainer,
} from './styles'

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format

interface CartItemProps {
  product: Product
}

export function CartItem(props: CartItemProps) {
  const { product } = props
  const { image, name, price } = product

  const { cartProducts, setQuantityOnCart, removeFromCart } =
    useContext(CartContext)

  function handleChangeQuantity(quantity: number) {
    setQuantityOnCart(product, quantity)
  }

  function handleRemoveFromCart() {
    removeFromCart(product)
  }

  const quantity = cartProducts.get(product) ?? 0

  return (
    <CartItemContainer>
      <ContentContainer>
        <img src={image} alt={`Xícara com pires contendo ${name}`} />
        <TitleActionsContainer>
          <Title>{name}</Title>
          <ActionsContainer>
            <InputNumber value={quantity} onChange={handleChangeQuantity} />
            <Button variant="secondary" onClick={handleRemoveFromCart}>
              <Trash />
              Remover
            </Button>
          </ActionsContainer>
        </TitleActionsContainer>
      </ContentContainer>
      <Price>{formatter(price)}</Price>
    </CartItemContainer>
  )
}
