import { ReactNode, forwardRef, ForwardRefRenderFunction } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './slider.styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: ReactNode
  settings: SliderSettings
}

const SliderComponent: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

export const Slider = forwardRef(SliderComponent)
