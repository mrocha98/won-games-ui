import { ReactNode } from 'react'
import NextLink from 'next/link'

import * as S from './auth.styles'
import { Heading } from 'components/Heading'
import { Logo, LogoProps } from 'components/Logo'

export type AuthTemplateProps = {
  title: string
  children: ReactNode
}

const LogoWithLink = (props: LogoProps) => (
  <NextLink href="/">
    <a>
      <Logo {...props} />
    </a>
  </NextLink>
)

export const Auth = ({ title, children }: AuthTemplateProps) => {
  const currentYear = new Date().getUTCFullYear()

  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <LogoWithLink id="banner" />

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              plataform.
            </S.Subtitle>
          </div>
          <S.Footer>
            Won Games {currentYear} &copy; All rights reserved
          </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <LogoWithLink id="content" color="black" size="large" />
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
