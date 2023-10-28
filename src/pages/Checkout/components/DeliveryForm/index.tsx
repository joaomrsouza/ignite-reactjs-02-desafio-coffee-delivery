import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { DeliveryFormContainer, Row } from './styles'

export function DeliveryForm() {
  const { register } = useFormContext()

  return (
    <DeliveryFormContainer>
      <Row>
        <Input
          required
          placeholder="CEP"
          {...register('cep', { required: true })}
        />
      </Row>
      <Row>
        <Input
          required
          placeholder="Rua"
          {...register('street', { required: true })}
        />
      </Row>
      <Row>
        <Input
          required
          placeholder="Número"
          relativeWidth={5}
          {...register('number', { required: true })}
        />
        <Input
          placeholder="Complemento"
          relativeWidth={9}
          {...register('complement', { required: true })}
        />
      </Row>
      <Row>
        <Input
          required
          placeholder="Bairro"
          relativeWidth={5}
          {...register('district', { required: true })}
        />
        <Input
          required
          placeholder="Cidade"
          relativeWidth={7}
          {...register('city', { required: true })}
        />
        <Input
          required
          placeholder="UF"
          relativeWidth={2}
          {...register('state', { required: true })}
        />
      </Row>
    </DeliveryFormContainer>
  )
}
