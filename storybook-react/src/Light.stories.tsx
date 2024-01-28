import type { Meta, StoryObj } from '@storybook/react';

import Light from './Light';

const Meta: Meta<typeof Light> = {
	component: Light,
	title: 'Light',
};

export default Meta;

type Story = StoryObj<typeof Meta>;

export const base: Story = {
	args: {},
};
