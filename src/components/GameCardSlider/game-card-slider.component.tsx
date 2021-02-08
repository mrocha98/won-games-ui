import * as S from './game-card-slider.styles'
import { ArrowLeftIcon, ArrowRightIcon } from './icons'
import { GameCard, GameCardProps } from 'components/GameCard'
import { Slider, SliderSettings } from 'components/Slider'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const SLIDES_TO_SHOW = 4

const SLIDER_BREAKPOINTS = {
  huge: 1375,
  large: 1024,
  medium: 570,
  small: 375
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: SLIDES_TO_SHOW,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRightIcon aria-label="next games" />,
  prevArrow: <ArrowLeftIcon aria-label="previous games" />,
  responsive: [
    {
      breakpoint: SLIDER_BREAKPOINTS.huge,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: SLIDER_BREAKPOINTS.large,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: SLIDER_BREAKPOINTS.medium,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: SLIDER_BREAKPOINTS.small,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export const GameCardSlider = ({
  items,
  color = 'white'
}: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}
