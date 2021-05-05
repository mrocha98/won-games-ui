import Link from 'next/link'

import * as S from './empty.styles'
import { Button } from 'components/Button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

export const Empty = ({ title, description, hasLink = false }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image
        src="/img/empty.svg"
        alt="a gamer in a couch playing videogame"
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  )
}
