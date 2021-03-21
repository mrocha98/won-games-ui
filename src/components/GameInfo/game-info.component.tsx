import * as S from './game-info.styles'
import * as I from './icons'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { Ribbon } from 'components/Ribbon'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

export const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{`$${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button icon={<I.AddToCartIcon />} size="large">
          Add to cart
        </Button>
        <Button icon={<I.WishlistIcon />} size="large" minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}
