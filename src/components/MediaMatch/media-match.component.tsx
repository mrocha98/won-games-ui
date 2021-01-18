import { DefaultBreakpoints } from 'styled-media-query'
import * as S from './media-match.styles'

export type MediaMatchProps = {
  lessThan?: keyof DefaultBreakpoints
  greaterThan?: keyof DefaultBreakpoints
  children: React.ReactNode
}

export const MediaMatch = ({
  lessThan,
  greaterThan,
  children
}: MediaMatchProps) => {
  return (
    <S.Wrapper lessThan={lessThan} greaterThan={greaterThan}>
      {children}
    </S.Wrapper>
  )
}
