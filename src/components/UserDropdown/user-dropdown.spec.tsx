import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import { UserDropdown } from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="lorem" />)

    expect(screen.getByText(/lorem/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="lorem" />)

    // open menu
    userEvent.click(screen.getByText(/lorem/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
