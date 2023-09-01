import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { Select } from '../../components/Select'
import { DeliveryForm } from './components/DeliveryForm'
import { OrderSummary } from './components/OrderSummary'
import {
  CheckoutContainer,
  Container,
  DeliveryFormPaymentContainer,
  HeaderContainer,
  HeaderContent,
  OrderSummaryContainer,
  PaymentOptionsContainer,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <DeliveryFormPaymentContainer>
        <Title>Complete seu pedido</Title>
        <Container>
          <HeaderContainer iconColor="yellow-dark">
            <MapPinLine />
            <HeaderContent>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </HeaderContent>
          </HeaderContainer>
          <DeliveryForm />
        </Container>
        <Container>
          <HeaderContainer iconColor="purple">
            <CurrencyDollar />
            <HeaderContent>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </HeaderContent>
          </HeaderContainer>
          <PaymentOptionsContainer>
            <Select icon={<CreditCard />}>Cartão de Crédito</Select>
            <Select icon={<Bank />}>Cartão de Débito</Select>
            <Select icon={<Money />}>Dinheiro</Select>
          </PaymentOptionsContainer>
        </Container>
      </DeliveryFormPaymentContainer>
      <OrderSummaryContainer>
        <Title>Complete seu pedido</Title>
        <OrderSummary />
      </OrderSummaryContainer>
    </CheckoutContainer>
  )
}
