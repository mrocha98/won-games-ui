import { FavoriteIcon, FavoriteBorderIcon, AddShoppingCartIcon } from './icons'
import { Button } from 'components/Button'
import { Ribbon, RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './game-card.styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  isFavorite?: boolean
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

export const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  isFavorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton role="button" onClick={onFav}>
          {isFavorite ? (
            <FavoriteIcon aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorderIcon aria-label="Add to Wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCartIcon />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}
