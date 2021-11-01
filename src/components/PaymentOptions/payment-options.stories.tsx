import { Story, Meta } from '@storybook/react/types-6-0'
import { PaymentOptions, PaymentOptionsProps } from '.'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => <PaymentOptions {...args} />
