import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

import { MediaMatchProps } from '.'

type breakpoint = keyof DefaultBreakpoints

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export const Wrapper = styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
