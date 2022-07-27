import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '@components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color'
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Button',
  backgroundColor: '#FE4785'
}
