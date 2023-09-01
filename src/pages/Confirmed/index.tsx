import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import delivery from '../../assets/delivery.svg'
import { IconText } from '../../components/IconText'

import {
  ConfirmedContainer,
  DeliverySummaryContainer,
  DeliverySummaryContainerBorder,
  Header,
  MainContainer,
} from './styles'

export function Confirmed() {
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
              <b>Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</b>
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
                <b>Cartão de Crédito</b>
              </p>
            </IconText>
          </DeliverySummaryContainer>
        </DeliverySummaryContainerBorder>
        <img src={delivery} />
      </MainContainer>
    </ConfirmedContainer>
  )
}
