import { Story, Meta } from '@storybook/react/types-6-0'
import { Showcase, ShowcaseProps } from '.'
import { item as highlightMock } from 'components/Highlight/mock'
import { items as gamesMock } from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '3rem 8rem' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    highlight: { type: '' },
    games: { type: '' }
  },
  args: {
    title: 'Most Popular'
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  games: gamesMock
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  highlight: highlightMock
}
