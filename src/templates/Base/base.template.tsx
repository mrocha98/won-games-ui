import { ReactNode } from 'react'

import * as S from './base.styles'
import { Menu } from 'components/Menu'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'

export type BaseTemplateProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)
