import * as S from './button.styles'

export type ButtonProps = {
  children?: React.ReactNode
  icon?: JSX.Element
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  rest?: React.HTMLProps<HTMLButtonElement> | unknown
}

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}
