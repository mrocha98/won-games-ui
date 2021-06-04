import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { CartList } from '.'
import mockItems from './mock'

jest.mock('components/GameItem', () => ({
  __esModule: true,
  GameItem: function Mock() {
    return <div data-testid="game-item" />
  }
}))

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 330,00" />
    )

    expect(screen.getAllByTestId('game-item')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#f231a5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
