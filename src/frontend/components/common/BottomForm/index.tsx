import React from 'react';
import { X } from 'react-feather';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ButtonClose, Children, Container, Title } from './BottomForm.styled';

interface IProps {
	open?: boolean;
	onClose: () => void;
	title?: string;
}

const BottomForm: React.FC<IProps> = ({ open, onClose, children, title }): JSX.Element => {
	const { openCustomerForm } = useSelector(({ app }: RootState) => app);

	return (
		<Container open={open || openCustomerForm}>
			<Children>
				{title && <Title>{title}</Title>}
				<ButtonClose onClick={onClose}>
					<X />
				</ButtonClose>
				{children}
			</Children>
		</Container>
	);
};

export default BottomForm;
