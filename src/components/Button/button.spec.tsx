import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { renderWithTheme } from 'utils/tests/helpers'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Lorem ipsum</Button>)

    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Lorem ipsum</Button>)

    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Lorem ipsum</Button>)

    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Lorem ipsum</Button>)

    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    renderWithTheme(<Button minimal>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })

    expect(
      screen.getByRole('button', { name: /buy now/i })
    ).toHaveStyleRule('background', 'none', { modifier: ':hover' })
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Lorem ipsum
      </Button>
    )

    expect(screen.getByRole('link', { name: /lorem ipsum/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
