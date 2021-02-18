import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { FormSignIn } from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

const Container = styled.div`
  width: 30rem;
  margin: auto;
`

export const Default: Story = () => (
  <Container>
    <FormSignIn />
  </Container>
)
