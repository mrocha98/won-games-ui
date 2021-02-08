import * as S from './banner-slider.styles'
import { Banner, BannerProps } from 'components/Banner'
import { Slider, SliderSettings } from 'components/Slider'

export type BannerSliderProps = {
  items: BannerProps[]
}

const SLIDER_BREAKPOINT_DESKTOP = 1170

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: SLIDER_BREAKPOINT_DESKTOP,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}
