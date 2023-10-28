import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import z from 'zod'
import { Select } from '../../components/Select'
import { CheckoutContext, PaymentMethod } from '../../contexts/CheckoutContext'
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

const AddressFormSchema = z.object({
  cep: z.string().regex(/^\d{5}-\d{3}$/),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string(),
  district: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
})

type AddressForm = z.infer<typeof AddressFormSchema>

export function Checkout() {
  const { setPaymentMethod, paymentMethod, setCheckoutAddress } =
    useContext(CheckoutContext)
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
    resolver: zodResolver(AddressFormSchema),
  })

  const { handleSubmit, reset } = form

  function handleConfirmOrder(data: AddressForm) {
    console.log(data)
    setCheckoutAddress(data)
    navigate('/confirmed')
    reset()
  }

  function getHandleSelectPayment(paymentMethod: PaymentMethod) {
    return () => setPaymentMethod(paymentMethod)
  }

  return (
    <form onSubmit={handleSubmit(handleConfirmOrder)}>
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
            <FormProvider {...form}>
              <DeliveryForm />
            </FormProvider>
          </Container>
          <Container>
            <HeaderContainer iconColor="purple">
              <CurrencyDollar />
              <HeaderContent>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </HeaderContent>
            </HeaderContainer>
            <PaymentOptionsContainer>
              <Select
                icon={<CreditCard />}
                selected={paymentMethod === 'credit'}
                onClick={getHandleSelectPayment('credit')}
              >
                Cartão de Crédito
              </Select>
              <Select
                icon={<Bank />}
                selected={paymentMethod === 'debit'}
                onClick={getHandleSelectPayment('debit')}
              >
                Cartão de Débito
              </Select>
              <Select
                icon={<Money />}
                selected={paymentMethod === 'money'}
                onClick={getHandleSelectPayment('money')}
              >
                Dinheiro
              </Select>
            </PaymentOptionsContainer>
          </Container>
        </DeliveryFormPaymentContainer>
        <OrderSummaryContainer>
          <Title>Complete seu pedido</Title>
          <OrderSummary />
        </OrderSummaryContainer>
      </CheckoutContainer>
    </form>
  )
}
