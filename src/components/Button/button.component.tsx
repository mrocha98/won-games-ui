import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react'
import * as S from './button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: JSX.Element
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  as?: ElementType
} & ButtonTypes

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}
