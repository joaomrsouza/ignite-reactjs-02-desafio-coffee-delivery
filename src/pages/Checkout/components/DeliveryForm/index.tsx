import { Input } from '../../../../components/Input'
import { DeliveryFormContainer, Row } from './styles'

export function DeliveryForm() {
  return (
    <DeliveryFormContainer>
      <Row>
        <Input required placeholder="CEP" />
      </Row>
      <Row>
        <Input required placeholder="Rua" />
      </Row>
      <Row>
        <Input required placeholder="Número" relativeWidth={5} />
        <Input placeholder="Complemento" relativeWidth={9} />
      </Row>
      <Row>
        <Input required placeholder="Bairro" relativeWidth={5} />
        <Input required placeholder="Cidade" relativeWidth={7} />
        <Input required placeholder="UF" relativeWidth={2} />
      </Row>
    </DeliveryFormContainer>
  )
}
