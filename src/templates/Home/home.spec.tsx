import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Home, HomeTemplateProps } from '.'
import { items as bannerMock } from 'components/BannerSlider/mock'
import { items as gamesMock } from 'components/GameCardSlider/mock'
import { item as highlightMock } from 'components/Highlight/mock'

const props: HomeTemplateProps = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  BannerSlider: function Mock() {
    return <div data-testid="Mock BannerSlider" />
  }
}))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/mock bannerslider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
  })
})
