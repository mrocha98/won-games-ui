import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'
import { Wrapper as Heading } from 'components/Heading/heading.styles'
import { Wrapper as GameCardSlider } from 'components/GameCardSlider/game-card-slider.styles'
import { Wrapper as Highlight } from 'components/Highlight/highlight.styles'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${Heading},
    ${Highlight},
    ${GameCardSlider} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${Highlight} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSlider} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
