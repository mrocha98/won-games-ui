import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /Lorem ipsum/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /Lorem ipsum/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /Lorem ipsum/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom with primary color as default', () => {
    renderWithTheme(<Heading lineBottom>Lorem ipsum</Heading>)
    expect(
      screen.getByRole('heading', { name: /Lorem ipsum/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a line at the bottom with secondary color when passed', () => {
    renderWithTheme(
      <Heading lineBottom lineColor="secondary">
        Lorem ipsum
      </Heading>
    )
    expect(
      screen.getByRole('heading', { name: /Lorem ipsum/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Lorem ipsum</Heading>)
    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('width', '3rem', { modifier: '::after' })
  })
})
