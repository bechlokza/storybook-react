import type { Meta, StoryObj } from '@storybook/react';

import Light from './Light';

const Meta: Meta<typeof Light> = {
	component: Light,
	title: 'Lights/Light',
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['green', 'yellow', 'red'],
		},
	},
};

export default Meta;

type Story = StoryObj<typeof Meta>;

export const red: Story = {
	args: {
		variant: 'red',
	},
};

export const yellow: Story = {
	args: {
		variant: 'yellow',
	},
};

export const green: Story = {
	args: {
		variant: 'green',
	},
};

export const GroupedLights: Story = {
	render: (args) => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 10,
				border: '1px solid black',
				width: 'max-content',
				padding: 10,
			}}
		>
			<Light variant='red' />
			<Light variant='yellow' />
			<Light variant='green' />
		</div>
	),
};
