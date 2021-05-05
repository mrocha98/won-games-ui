import 'match-media-mock'
import { screen } from '@testing-library/react'
import { defaultBreakpoints } from 'styled-media-query'
import { renderWithTheme } from 'utils/tests/helpers'

import { Game, GameTemplateProps } from '.'
import galleryMock from 'components/Gallery/mock'
import { game as gameInfoMock } from 'components/GameInfo/mock'
import { props as gameDetailsMock } from 'components/GameDetails/mock'
import { items as gamesMock } from 'components/GameCardSlider/mock'
import { item as highlightMock } from 'components/Highlight/mock'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<p>custom HTML</p>`,
  details: gameDetailsMock,
  upcomingGames: gamesMock,
  upcommingHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  Gallery: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  GameDetails: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  GameInfo: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery if on mobile', () => {
    renderWithTheme(<Game {...props} />)

    const gallery = screen.getByTestId('Mock Gallery').parentElement
    expect(gallery).toHaveStyle({ display: 'none' })
    expect(gallery).toHaveStyleRule('display', 'block', {
      media: `(min-width: ${defaultBreakpoints.medium})`
    })
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })
    expect(cover).toHaveStyle({
      backgroundImage: `url(bg-image.jpg)`,
      height: '39.5rem'
    })
    expect(cover).toHaveStyleRule('height', '70rem', {
      media: `(min-width: ${defaultBreakpoints.medium})`
    })
    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      { media: `(min-width: ${defaultBreakpoints.medium})` }
    )
  })
})
