import React from 'react';
import { Button } from './Button.styled';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
	text: string;
	icon?: JSX.Element;
	primary?: boolean;
}

const AppButton: React.FC<IButton> = ({ icon, text, onClick, primary }) => {
	return (
		<Button onClick={onClick} primary={primary}>
			{icon && icon}
			{text}
		</Button>
	);
};

export default AppButton;
