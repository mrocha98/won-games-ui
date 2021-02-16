import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { GameCard, GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    title: 'Red Dead',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: '$100.00'
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    }
  }
} as Meta

const Container = styled.div`
  width: 30rem;
`

export const Default: Story<GameCardProps> = (args) => (
  <Container>
    <GameCard {...args} />
  </Container>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <Container>
    <GameCard {...args} />
  </Container>
)

WithRibbon.args = {
  promotionalPrice: '$80.00',
  ribbon: '20% OFF',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}
