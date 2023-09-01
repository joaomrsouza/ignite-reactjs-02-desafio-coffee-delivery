import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import banner from '../../../../assets/banner.svg'
import { IconText } from '../../../../components/IconText'
import { BannerContainer, BannerContent, Grid, TitleContainer } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleContainer>

        <Grid>
          <li>
            <IconText
              circleBackground="yellow-dark"
              icon={<ShoppingCart weight="fill" />}
            >
              Compra simples e segura
            </IconText>
          </li>
          <li>
            <IconText
              circleBackground="base-text"
              icon={<Package weight="fill" />}
            >
              Embalagem mantém o café intacto
            </IconText>
          </li>
          <li>
            <IconText circleBackground="yellow" icon={<Timer weight="fill" />}>
              Entrega rápida e rastreada
            </IconText>
          </li>
          <li>
            <IconText circleBackground="purple" icon={<Coffee weight="fill" />}>
              O café chega fresquinho até você
            </IconText>
          </li>
        </Grid>
      </BannerContent>
      <img src={banner} alt="" />
    </BannerContainer>
  )
}
