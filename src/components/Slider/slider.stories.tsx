import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import { Slider, SliderProps } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

const slides = Array.from({ length: 5 }, (_, index) => (
  <Slide key={index}>{index}</Slide>
))

export const Horizontal: Story<SliderProps> = () => (
  <Slider settings={settings}>{slides}</Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story<SliderProps> = () => (
  <Slider settings={verticalSettings}>{slides}</Slider>
)
