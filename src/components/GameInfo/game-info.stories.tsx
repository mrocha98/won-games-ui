import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { GameInfo, GameInfoProps } from '.'
import { game } from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: game
} as Meta

const Container = styled.div`
  max-width: 144rem;
  padding: 1.5rem;
  margin: auto;
`

export const Default: Story<GameInfoProps> = (args) => (
  <Container>
    <GameInfo {...args} />
  </Container>
)
