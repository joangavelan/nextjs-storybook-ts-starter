import { ComponentMeta, ComponentStory } from '@storybook/react'
import Home from '@pages/index'

export default {
  title: 'Pages/Home',
  component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
