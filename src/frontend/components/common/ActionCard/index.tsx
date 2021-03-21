import React from 'react';
import { AlertTriangle } from 'react-feather';
import { Card, CardTitle, CardContent, CardDescription, CardIcon } from './ActionCard.styled';

interface IProps {
	title: string;
	description: string;
	onClick?: () => void;
	icon?: JSX.Element;
	size?: 'small';
}

const ActionCard: React.FC<IProps> = ({ title, description, icon, onClick, size }) => {
	return (
		<Card onClick={onClick} size={size}>
			<CardIcon size={size}>{icon ? icon : <AlertTriangle />}</CardIcon>
			<CardContent>
				<CardTitle size={size}>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardContent>
		</Card>
	);
};

export default ActionCard;
