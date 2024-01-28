import React from 'react';

type Props = {
	variant: 'green' | 'yellow' | 'red';
};

const Light = ({ variant = 'green' }: Props) => {
	return <div className={`light light--${variant}`}></div>;
};

export default Light;
