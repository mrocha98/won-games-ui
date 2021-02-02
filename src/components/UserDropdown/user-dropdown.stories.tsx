import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { UserDropdown, UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown
} as Meta

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 98%;
`

export const Default: Story<UserDropdownProps> = (args) => (
  <Container>
    <UserDropdown {...args} />
  </Container>
)

Default.args = {
  username: 'Faustinho'
}
