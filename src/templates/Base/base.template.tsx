import { ReactNode } from 'react'

import * as S from './base.styles'
import { Menu } from 'components/Menu'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'

export type BaseTemplateProps = {
  children: ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
