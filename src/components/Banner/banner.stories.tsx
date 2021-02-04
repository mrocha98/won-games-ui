import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Container = styled.div`
  max-width: 104rem;
  margin: 0 auto;
`

export const Default: Story<BannerProps> = (args) => (
  <Container>
    <Banner {...args} />
  </Container>
)
