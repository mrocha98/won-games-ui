import { GameItem, GameItemProps } from 'components/GameItem'
import * as S from './cart-list.styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

export const CartList = ({ total, items }: CartListProps) => {
  return (
    <S.Wrapper>
      {items.map((item) => (
        <GameItem key={item.title} {...item} />
      ))}

      <S.Footer>
        Total <S.Total>{total}</S.Total>
      </S.Footer>
    </S.Wrapper>
  )
}
