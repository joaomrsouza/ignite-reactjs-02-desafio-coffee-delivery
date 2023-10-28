import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import delivery from '../../assets/delivery.svg'
import { IconText } from '../../components/IconText'

import { useContext } from 'react'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import {
  ConfirmedContainer,
  DeliverySummaryContainer,
  DeliverySummaryContainerBorder,
  Header,
  MainContainer,
} from './styles'

export function Confirmed() {
  const { address, paymentMethod } = useContext(CheckoutContext)

  return (
    <ConfirmedContainer>
      <Header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>
      <MainContainer>
        <DeliverySummaryContainerBorder>
          <DeliverySummaryContainer>
            <IconText circleBackground="purple" icon={<MapPin weight="fill" />}>
              Entrega em{' '}
              <b>
                {address.street}, {address.number}
              </b>
              <br />
              {address.district} - {address.city}, {address.state}
            </IconText>
            <IconText circleBackground="yellow" icon={<Timer weight="fill" />}>
              <p>Previsão de entrega</p>
              <p>
                <b>20 min - 30 min</b>
              </p>
            </IconText>
            <IconText circleBackground="yellow-dark" icon={<CurrencyDollar />}>
              <p>Pagamento na entrega</p>
              <p>
                {paymentMethod === 'credit' && <b>Cartão de Crédito</b>}
                {paymentMethod === 'debit' && <b>Cartão de Débito</b>}
                {paymentMethod === 'money' && <b>Dinheiro</b>}
              </p>
            </IconText>
          </DeliverySummaryContainer>
        </DeliverySummaryContainerBorder>
        <img src={delivery} />
      </MainContainer>
    </ConfirmedContainer>
  )
}
