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
	height: 100vh;
	min-height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	padding: 1rem 1rem 5rem 1rem;
  animation: ${fadeIn} 0.6s ease;
`;

export const MainHeader = styled.div`
	width: 100%;
	height: 3rem;
	position: absolute;
	top: 0;
	left: 0;
	padding: 1rem;
`;

export const Title = styled.h1`
	color: ${({ theme }) => addOpacity(theme.title, 0.7)};
	margin: 0;
	font-weight: 400;
	position: relative;

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
