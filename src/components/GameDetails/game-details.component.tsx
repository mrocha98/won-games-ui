import * as S from './game-details.styles'
import * as I from './icons'
import { Heading } from 'components/Heading'
import { MediaMatch } from 'components/MediaMatch'

export type Platform = 'windows' | 'linux' | 'mac'

export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: Platform[]
  publisher: string
  rating: Rating
  genres: string[]
}

export const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating,
  genres
}: GameDetailsProps) => {
  const ICON_SIZE = 18
  const platformIcons = {
    linux: <I.LinuxIcon title="linux" size={ICON_SIZE} />,
    mac: <I.MacIcon title="mac" size={ICON_SIZE} />,
    windows: <I.WindowsIcon title="windows" size={ICON_SIZE} />
  }

  const formatedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(releaseDate))

  const formatRating = (ratingString: string) =>
    ratingString.replace('BR', '').concat('+')

  const formatedRating = rating === 'BR0' ? 'FREE' : formatRating(rating)

  const formatedGenres = genres.join(' / ')

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{formatedDate}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{formatedRating}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{formatedGenres}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}
