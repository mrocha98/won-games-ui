import { Base } from 'templates/Base'
import { Container } from 'components/Container'
import { Heading } from 'components/Heading'
import { GameCard, GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Showcase } from 'components/Showcase'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import { Empty } from 'components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

export const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  const hasGames = !!games.length

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {hasGames ? (
          <Grid>
            {games.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Yout wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
