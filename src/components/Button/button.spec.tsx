import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Lorem ipsum</Button>)

    expect(screen.getByRole('button', { name: /lorem ipsum/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
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
})
