import { ReactNode, createContext, useState } from 'react'

interface Address {
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
}

const paymentMethods = ['credit', 'debit', 'money'] as const

export type PaymentMethod = (typeof paymentMethods)[number]

interface CheckoutContextData {
  address: Address
  paymentMethod: PaymentMethod
  setCheckoutAddress: (newAddress: Address) => void
  setPaymentMethod: (payment: PaymentMethod) => void
}

export const CheckoutContext = createContext({} as CheckoutContextData)

interface CheckoutProviderProps {
  children: ReactNode
}

export const CheckoutContextProvider = (props: CheckoutProviderProps) => {
  const { children } = props

  const [address, setAddress] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  })

  const [selectedPayment, setSelectedPayment] =
    useState<PaymentMethod>('credit')

  function setCheckoutAddress(newAddress: Address) {
    setAddress(newAddress)
  }

  function setPaymentMethod(payment: PaymentMethod) {
    setSelectedPayment(payment)
  }

  return (
    <CheckoutContext.Provider
      value={{
        address,
        paymentMethod: selectedPayment,
        setCheckoutAddress,
        setPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
