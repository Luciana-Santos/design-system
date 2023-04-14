import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@lucianadss-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat expedita temporibus aut assumenda illum voluptas recusandae iste voluptatibus, ipsa porro modi atque dolorem, rem id quisquam iure? Nihil, necessitatibus.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text.',
    as: 'strong',
  },
}
