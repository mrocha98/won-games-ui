import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { GameDetails, GameDetailsProps, Platform } from '.'
import { props } from './mock'

props.platforms = ['windows', 'linux', 'mac'] as Platform[]

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    ...props
  },
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: props.platforms
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Action']
      }
    }
  }
} as Meta

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: Story<GameDetailsProps> = (args) => (
  <Container>
    <GameDetails {...args} />
  </Container>
)
