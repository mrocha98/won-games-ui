import { useState, useEffect, useRef } from 'react'
import SlickSlider from 'react-slick'

import * as S from './gallery.styles'
import * as I from './icons'
import { Slider, SliderSettings } from 'components/Slider'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const SLIDES_TO_SHOW = 4

const SLIDER_BREAKPOINTS = {
  huge: 1375,
  large: 1024,
  medium: 768
}

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <I.ArrowRight aria-label="next image" />,
  prevArrow: <I.ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: SLIDES_TO_SHOW,
  responsive: [
    {
      breakpoint: SLIDER_BREAKPOINTS.huge,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: SLIDER_BREAKPOINTS.large,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: SLIDER_BREAKPOINTS.medium,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map(({ src, label }, index) => (
          <img
            role="button"
            key={`gallery-${index}`}
            src={src}
            alt={`Thumb - ${label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <I.Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map(({ src, label }, index) => (
              <img
                key={`gallery-${index}`}
                src={src}
                alt={`Thumb - ${label}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}
