import * as S from './showcase.styles'
import { GameCardProps } from 'components/GameCard'
import { Highlight, HighlightProps } from 'components/Highlight'
import { Heading } from 'components/Heading'
import { GameCardSlider } from 'components/GameCardSlider'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export const Showcase = ({ title, highlight, games }: ShowcaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}

      {!!games && <GameCardSlider items={games} />}
    </S.Wrapper>
  )
}
