import React from 'react';
import { X } from 'react-feather';
import { ClosableButton, ModalClosable, ModalContent, ModalWrapper, Title } from './Modal.styled';

interface IProps {
	open?: boolean;
	onClose?: () => void;
	title?: string;
}

const Modal: React.FC<IProps> = ({ children, open, onClose, title }): JSX.Element => {
	return (
		<>
			{open ? (
				<ModalWrapper>
					<ModalClosable onClick={onClose} />
					<ModalContent>
						<ClosableButton onClick={onClose}>
							<X />
						</ClosableButton>
						{title && <Title>{title}</Title>}
						{children}
					</ModalContent>
				</ModalWrapper>
			) : null}
		</>
	);
};

export default Modal;
