import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  },
  args: {
    name: 'category',
    isChecked: true
  }
} as Meta

const Container = styled.div`
  padding: 1rem;
`

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <Container>
      <Checkbox label="Adventure" labelFor="adventure" {...args} />
    </Container>
    <Container>
      <Checkbox label="Action" labelFor="action" {...args} />
    </Container>
    <Container>
      <Checkbox label="Strategy" labelFor="strategy" {...args} />
    </Container>
  </>
)
