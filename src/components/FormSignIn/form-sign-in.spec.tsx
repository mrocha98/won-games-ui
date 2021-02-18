import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { FormSignIn } from '.'

describe('<FormSignIn />', () => {
  it('should render the form elements', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    const inputEmailElement = screen.getByPlaceholderText(/email/i)
    const inputPasswordElement = screen.getByPlaceholderText(/password/i)
    const buttonElement = screen.getByRole('button', { name: /sign in now/i })

    expect(inputEmailElement).toBeInTheDocument()
    expect(inputEmailElement).toHaveAttribute('type', 'email')
    expect(inputEmailElement).toHaveAttribute('name', 'email')

    expect(inputPasswordElement).toBeInTheDocument()
    expect(inputPasswordElement).toHaveAttribute('type', 'password')
    expect(inputPasswordElement).toHaveAttribute('name', 'password')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('type', 'submit')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument()

    const linkElement = screen.getByRole('link', { name: /sign up/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/sign-up')
  })
})
