import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Button } from '../Button'

import { FormEvent, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Product } from '../../data/products'
import { InputNumber } from '../InputNumber'
import {
  ActionsForm,
  BuyContainer,
  Description,
  Price,
  ProductCardContainer,
  Tag,
  TagList,
  Title,
} from './styles'

const formatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
}).format

interface ProductCardProps {
  product: Product
}

export function ProductCard(props: ProductCardProps) {
  const { product } = props
  const { name, tags, description, price, image } = product

  const { addToCart } = useContext(CartContext)

  function handleAddToCart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    addToCart(
      product,
      Number(new FormData(event.currentTarget).get('quantity')),
    )

    event.currentTarget.reset()
  }

  return (
    <ProductCardContainer>
      <img src={image} />
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagList>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <BuyContainer>
        <Price>
          R$ <span>{formatter(price)}</span>
        </Price>
        <ActionsForm onSubmit={handleAddToCart}>
          <InputNumber name="quantity" defaultValue={1} min={1} />
          <Button variant="icon">
            <ShoppingCartSimple weight="fill" />
          </Button>
        </ActionsForm>
      </BuyContainer>
    </ProductCardContainer>
  )
}
