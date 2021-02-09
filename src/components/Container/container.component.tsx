import { ReactNode } from 'react'

import * as S from './container.styles'

export type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)
