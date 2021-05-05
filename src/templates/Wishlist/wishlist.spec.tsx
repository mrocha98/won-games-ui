import 'match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Wishlist, WishlistTemplateProps } from '.'
import { items as gamesMock } from 'components/GameCardSlider/mock'
import { item as highlightMock } from 'components/Highlight/mock'

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  Showcase: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Wishlist />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render Empty when there are no games', () => {
    renderWithTheme(<Wishlist {...props} games={undefined} />)

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
