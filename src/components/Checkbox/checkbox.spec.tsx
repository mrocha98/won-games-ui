import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render with a label', () => {
    renderWithTheme(<Checkbox label="lorem ipsum" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/lorem ipsum/i)).toBeInTheDocument()

    const labelElement = screen.getByText(/lorem ipsum/i)
    expect(labelElement).toHaveAttribute('for', 'check')
  })

  it('should render without a label', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByText(/lorem ipsum/i)).not.toBeInTheDocument()
  })

  it('should render with a black label', () => {
    renderWithTheme(
      <Checkbox label="lorem ipsum" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/lorem ipsum/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck with true when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(true)
    })
  })

  it('should dispatch onCheck with false when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(false)
    })
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="check" labelFor="check" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/check/i)).toHaveFocus()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(
      <Checkbox label="check" labelFor="check" />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
