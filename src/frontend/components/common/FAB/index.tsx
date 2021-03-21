import React from 'react';
import { Plus } from 'react-feather';
import { Button } from './FAB.styled';

interface IProps {
	icon?: JSX.Element;
	onClick?: () => void;
}

const FAB: React.FC<IProps> = ({ onClick, icon }): JSX.Element => {
	return <Button onClick={onClick}>{icon ? icon : <Plus />}</Button>;
};

export default FAB;
