import { produce } from 'immer'
import { createContext, ReactNode, useState } from 'react'
import { Product } from '../data/products'
import { useLog } from '../hooks/useLog'

interface CartContextData {
  cartProducts: Map<Product, number>
  addToCart: (productId: Product, quantity: number) => void
  setQuantityOnCart: (productId: Product, quantity: number) => void
  removeFromCart: (productId: Product) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartContextProvider(props: CartProviderProps) {
  const { children } = props

  const [cartProducts, setCartProducts] = useState<Map<Product, number>>(
    new Map(),
  )

  useLog(cartProducts)

  function addToCart(product: Product, quantity: number) {
    setCartProducts((state) =>
      produce(state, (draft) => {
        const currentQuantity = draft.get(product) ?? 0
        draft.set(product, currentQuantity + quantity)
      }),
    )
  }

  function setQuantityOnCart(product: Product, quantity: number) {
    setCartProducts((state) =>
      produce(state, (draft) => {
        quantity === 0 ? draft.delete(product) : draft.set(product, quantity)
      }),
    )
  }

  function removeFromCart(product: Product) {
    setCartProducts((state) =>
      produce(state, (draft) => {
        draft.delete(product)
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, setQuantityOnCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
