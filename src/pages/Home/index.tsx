import { ProductCard } from '../../components/ProductCard'
import { PRODUCTS } from '../../data/products'
import { Banner } from './components/Banner'
import { Content, HomeContainer, ProductList } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Content>
        <h2>Nossos cafés</h2>
        <ProductList>
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ProductList>
      </Content>
    </HomeContainer>
  )
}
