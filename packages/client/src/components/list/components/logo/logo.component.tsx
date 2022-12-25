import React from 'react'
import { LogoImageStyled } from './logo.style'

interface ILogoProps {
  src?: string
  title?: string
}

const defaultUrl = 'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg'

export const Logo: React.VFC<ILogoProps> = ({ src, title = 'logo' }) => {
  return <LogoImageStyled src={src ?? defaultUrl} title={title} />
}
