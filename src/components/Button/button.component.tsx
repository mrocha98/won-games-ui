import * as S from './button.styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ children, size = 'medium' }: ButtonProps) => {
  return (
    <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
  )
}
