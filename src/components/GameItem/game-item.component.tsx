import * as S from './game-item.styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
}

export const GameItem = ({ img, title, price }: GameItemProps) => {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>

        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>
    </S.Wrapper>
  )
}
