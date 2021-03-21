import styled from 'styled-components';

export const ModalWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #00000080;
	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 999;
`;

export const ModalContent = styled.div`
	width: 90%;
	max-width: 400px;
	height: 70vh;
	padding: 2rem 1rem 1rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	z-index: 2;
	background-color: ${({ theme }) => theme.primary};
	border-radius: ${({ theme }) => theme.borderRadius.sm};
	position: relative;
`;

export const ModalClosable = styled.div`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
`;

export const ClosableButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: transparent;
	margin: 0;
	padding: 0;
	border: 0;
	outline: none;
	cursor: pointer;

	& svg {
		stroke: ${({ theme }) => theme.asset};
	}
`;

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin: -1.2rem 0 0 0;
	padding: 0;
	color: ${({ theme }) => theme.colors.melon};
`;
