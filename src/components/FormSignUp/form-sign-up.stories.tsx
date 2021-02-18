import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { FormSignUp } from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

const Container = styled.div`
  width: 30rem;
  margin: auto;
`

export const Default: Story = () => (
  <Container>
    <FormSignUp />
  </Container>
)
