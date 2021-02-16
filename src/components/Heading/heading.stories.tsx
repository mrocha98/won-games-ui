import { Story, Meta } from '@storybook/react/types-6-0'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      name: 'content',
      type: 'string'
    }
  },
  args: {
    color: 'black'
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Populars'
}
