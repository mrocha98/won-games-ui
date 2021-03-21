import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Base } from '.'

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  Footer: function Mock() {
    return <footer data-testid="Mock Footer" />
  }
}))

describe('<Base />', () => {
  it('should render menu, children and menu', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
