import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back!',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  }
} as Meta

const Container = styled.div`
  max-width: 104rem;
`

export const Default: Story<HighlightProps> = (args) => (
  <Container>
    <Highlight {...args} />
  </Container>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Container>
    <Highlight {...args} />
  </Container>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
