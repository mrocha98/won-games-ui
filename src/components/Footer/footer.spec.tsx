import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Footer } from '.'

describe('<Footer />', () => {
  it('should render the Logo', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should render a Contact column', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
  })

  it('should render a Follow Us column', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()
  })

  it('should render a Links column', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
  })

  it('should render a Location column', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })

  it('should match the snapshot', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
