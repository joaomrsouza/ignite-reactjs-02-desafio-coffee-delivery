import { HeaderContainer, LocationContainer, RightContainer } from './styles'

import { MapPin } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <RightContainer>
        <LocationContainer>
          <MapPin weight="fill" />
          Sobral, CE
        </LocationContainer>
        <Cart />
      </RightContainer>
    </HeaderContainer>
  )
}
