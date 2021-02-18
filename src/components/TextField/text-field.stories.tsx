import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import styled from 'styled-components'
import { TextField, TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

const Container = styled.div`
  max-width: 30rem;
  padding: 1.5rem;
`

export const Default: Story<TextFieldProps> = (args) => (
  <Container>
    <TextField {...args} />
  </Container>
)

export const withIcon: Story<TextFieldProps> = (args) => (
  <Container>
    <TextField icon={<Email />} {...args} />
  </Container>
)

export const withError: Story<TextFieldProps> = (args) => (
  <Container>
    <TextField icon={<Email />} {...args} />
  </Container>
)

withError.args = {
  error: 'Ops...something is wrong'
}
