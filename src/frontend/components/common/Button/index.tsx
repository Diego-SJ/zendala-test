import React from 'react';
import { Button } from './Button.styled';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
	text: string;
	icon?: JSX.Element;
	primary?: boolean;
	block?: boolean;
}

const AppButton: React.FC<IButton> = ({ icon, text, onClick, primary, block, disabled }) => {
	return (
		<Button onClick={onClick} primary={primary} block={block} disabled={disabled}>
			{icon && icon}
			{text}
		</Button>
	);
};

export default AppButton;
