import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`

export const Default: Story = () => (
  <Container>
    <Footer />
  </Container>
)
