import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { BannerSlider, BannerSliderProps } from '.'
import { items } from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: Story<BannerSliderProps> = (args) => (
  <Container>
    <BannerSlider {...args} />
  </Container>
)
