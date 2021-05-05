import * as S from './game.styles'
import { Base } from 'templates/Base'
import { GameInfo, GameInfoProps } from 'components/GameInfo'
import { Gallery, GalleryImageProps } from 'components/Gallery'
import { TextContent } from 'components/TextContent'
import { GameDetails, GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Showcase } from 'components/Showcase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

export const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcommingHighlight,
  recommendedGames
}: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionDescription>
          <TextContent title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
        </S.SectionGameDetails>

        <Showcase
          title="Upcoming"
          games={upcomingGames}
          highlight={upcommingHighlight}
        />

        <Showcase title="You may like these games" games={recommendedGames} />
      </S.Main>
    </Base>
  )
}
