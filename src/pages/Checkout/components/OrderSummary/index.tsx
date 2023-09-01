import { Fragment, useContext } from 'react'
import { Button } from '../../../../components/Button'
import { CartItem } from '../../../../components/CartItem'
import { CartContext } from '../../../../contexts/CartContext'
import { Divider, OrderSummaryContainer, PriceSummaryContainer } from './styles'

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format

export function OrderSummary() {
  const { cartProducts } = useContext(CartContext)

  const orderPrice = Array.from(cartProducts.entries()).reduce(
    (acc, [product, quantity]) => acc + product.price * quantity,
    0,
  )

  return (
    <OrderSummaryContainer>
      {Array.from(cartProducts.keys()).map((product) => (
        <Fragment key={product.id}>
          <CartItem product={product} />
          <Divider />
        </Fragment>
      ))}
      <PriceSummaryContainer>
        <p>
          Total de itens
          <span>{formatter(orderPrice)}</span>
        </p>
        <p>
          Entrega
          <span>{formatter(3.5)}</span>
        </p>
        <p className="total">
          Total
          <span>{formatter(3.5 + orderPrice)}</span>
        </p>
      </PriceSummaryContainer>
      <Button>Confirmar Pedido</Button>
    </OrderSummaryContainer>
  )
}
