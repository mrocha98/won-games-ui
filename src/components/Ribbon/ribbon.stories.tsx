import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Ribbon, RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

const Container = styled.div`
  width: 40rem;
  height: 25rem;
  position: relative;
  background-color: #888;
`

export const Default: Story<RibbonProps> = (args) => (
  <Container>
    <Ribbon {...args} />
  </Container>
)
