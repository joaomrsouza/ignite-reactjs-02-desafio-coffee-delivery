import { Trash } from '@phosphor-icons/react'
import { ChangeEvent, useContext } from 'react'
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

  const { cartProducts, setQuantityOnCart } = useContext(CartContext)

  function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    const quantity = Number(event.target.value)
    console.log(quantity)
    setQuantityOnCart(product, quantity)
  }

  const quantity = cartProducts.get(product) ?? 0

  return (
    <CartItemContainer>
      <ContentContainer>
        <img src={image} />
        <TitleActionsContainer>
          <Title>{name}</Title>
          <ActionsContainer>
            <InputNumber value={quantity} onChange={handleChangeQuantity} />
            <Button variant="secondary">
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
