import styled, { keyframes } from 'styled-components';
import { addOpacity } from '../../../theme';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Main = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	animation: ${fadeIn} 0.6s ease;
	box-sizing: border-box;
	padding: 0;
`;

export const MainHeader = styled.div`
	width: 100%;
	height: 3rem;
	box-sizing: border-box;
`;

export const Title = styled.h1`
	color: ${({ theme }) => addOpacity(theme.title, 0.9)};
	margin: 1rem;
	font-weight: bold;
	position: sticky;
	top: 0;

	&::before {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		width: 3rem;
		height: 5px;
		background: ${({ theme }) => addOpacity(theme.asset, 0.2)};
	}
`;

export const MainContent = styled.div`
	width: 100%;
	height: calc(100% - 4rem);
	padding: 1rem;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
