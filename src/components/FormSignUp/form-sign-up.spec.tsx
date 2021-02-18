import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { FormSignUp } from '.'

describe('<FormSignUp />', () => {
  it('should render the form elements', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    const inputNameElement = screen.getByPlaceholderText(/name/i)
    const inputEmailElement = screen.getByPlaceholderText(/email/i)
    const inputPasswordElement = screen.getByPlaceholderText('Password')
    const inputConfirmPasswordElement = screen.getByPlaceholderText(
      'Confirm password'
    )
    const buttonElement = screen.getByRole('button', { name: /sign up now/i })

    expect(inputNameElement).toBeInTheDocument()
    expect(inputNameElement).toHaveAttribute('type', 'text')
    expect(inputNameElement).toHaveAttribute('name', 'name')

    expect(inputEmailElement).toBeInTheDocument()
    expect(inputEmailElement).toHaveAttribute('type', 'email')
    expect(inputEmailElement).toHaveAttribute('name', 'email')

    expect(inputPasswordElement).toBeInTheDocument()
    expect(inputPasswordElement).toHaveAttribute('type', 'password')
    expect(inputPasswordElement).toHaveAttribute('name', 'password')

    expect(inputConfirmPasswordElement).toBeInTheDocument()
    expect(inputConfirmPasswordElement).toHaveAttribute('type', 'password')
    expect(inputConfirmPasswordElement).toHaveAttribute(
      'name',
      'confirm-password'
    )

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('type', 'submit')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()

    const linkElement = screen.getByRole('link', { name: /sign in/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/sign-in')
  })
})
