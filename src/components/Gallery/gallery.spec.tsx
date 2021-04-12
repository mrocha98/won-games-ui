import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { Gallery } from '.'
import mockItems from './mock'

describe('<Gallery />', () => {
  const items = mockItems.slice(0, 2)

  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={items} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', items[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', items[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={items} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    const thumb = screen.getByRole('button', {
      name: /Thumb - Gallery Image 1/i
    })

    fireEvent.click(thumb)
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={items} />)

    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    const thumb = screen.getByRole('button', {
      name: /Thumb - Gallery Image 1/i
    })

    fireEvent.click(thumb)
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={items} />)

    const thumbName = /Thumb - Gallery Image 2/i
    const thumb = screen.getByRole('button', {
      name: thumbName
    })

    fireEvent.click(thumb)

    const img = await screen.findByRole('img', { name: thumbName })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={items} />)

    const modal = screen.getByLabelText('modal')

    const thumb = screen.getByRole('button', {
      name: /Thumb - Gallery Image 1/i
    })

    fireEvent.click(thumb)

    const closeButton = screen.getByRole('button', { name: /close modal/i })

    fireEvent.click(closeButton)

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when Escape key is pressed', () => {
    const { container } = renderWithTheme(<Gallery items={items} />)

    const modal = screen.getByLabelText('modal')

    const thumb = screen.getByRole('button', {
      name: /Thumb - Gallery Image 1/i
    })

    fireEvent.click(thumb)

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
