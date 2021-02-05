import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Ribbon } from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>lorem ipsum</Ribbon>)

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })

  it('should render with primary color by default', () => {
    renderWithTheme(<Ribbon>lorem ipsum</Ribbon>)

    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with secondary color when color is passed', () => {
    renderWithTheme(<Ribbon color="secondary">lorem ipsum</Ribbon>)

    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with normal size by default', () => {
    renderWithTheme(<Ribbon>lorem ipsum</Ribbon>)

    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with small size', () => {
    renderWithTheme(<Ribbon size="small">lorem ipsum</Ribbon>)

    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Ribbon>lorem ipsum</Ribbon>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
