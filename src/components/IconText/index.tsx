import { ReactNode } from 'react'
import { IconCircle, IconCircleProps, IconTextContainer } from './styles'

interface IconTextProps {
  children: ReactNode
  circleBackground: IconCircleProps['background']
  icon: ReactNode
}

export function IconText(props: IconTextProps) {
  const { children, icon, circleBackground } = props

  return (
    <IconTextContainer>
      <IconCircle background={circleBackground}>{icon}</IconCircle>
      <div>{children}</div>
    </IconTextContainer>
  )
}
