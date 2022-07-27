import { ComponentMeta, ComponentStory } from '@storybook/react'
import NextImage from '@components/NextImage'

export default {
  title: 'Components/NextImage',
  component: NextImage
} as ComponentMeta<typeof NextImage>

const Template: ComponentStory<typeof NextImage> = () => <NextImage />

export const Default = Template.bind({})
