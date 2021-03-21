import React from 'react';
import { ToggleButton, ToggleSwitch } from './Toggle.styled';

interface IToggle {
	onClick?: () => void;
	isChecked?: boolean;
}

const Toogle: React.FC<IToggle> = ({ onClick, isChecked }): JSX.Element => {
	return (
		<ToggleButton active={isChecked} onClick={onClick}>
			<ToggleSwitch />
		</ToggleButton>
	);
};

export default Toogle;
