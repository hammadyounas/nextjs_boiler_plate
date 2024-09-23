import React from 'react';
import { Meta, Story } from '@storybook/react';
import HomeUI from '../UI/HomeUI';

export default {
  title: 'Pages/Home',
  component: HomeUI,
} as Meta;

const Template: Story = () => <HomeUI />;

export const Default = Template.bind({});
