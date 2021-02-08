import { ReactNode } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './slider.styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: ReactNode
  settings: SliderSettings
}

export const Slider = ({ children, settings }: SliderProps) => {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  )
}
