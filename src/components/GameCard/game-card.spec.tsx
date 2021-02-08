import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { GameCard } from '.'

const props = {
  title: 'Godzilla Giroflex',
  developer: 'Mozilla Foundation',
  img: '/img/red-dead-img.jpg',
  price: 'R$ 420,69'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const priceElement = screen.getByText(props.price)

    expect(priceElement).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(priceElement).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render a line-through in price when it is promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 123,45" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('R$ 123,45')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} isFavorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="MY Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbonElement = screen.getByText(/my ribbon/i)

    expect(ribbonElement).toBeInTheDocument()

    expect(ribbonElement).toHaveStyle({
      backgroundColor: '#3CD3C1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
