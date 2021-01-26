import styled, { keyframes } from 'styled-components';

const rouletteStateless = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(-180deg);
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Logo = styled.div`
	width: 10rem;
	height: 10rem;
	min-height: 10rem;
	border-radius: 50rem;
	background: linear-gradient(to left, rgb(169, 53, 236), rgb(0, 102, 255));
	display: grid;
	place-content: center;
  margin-bottom: 8rem;
  
  & > button {
    font-size: 0.5rem;
  }

	& > svg {
		width: 5rem;
		height: 5rem;
		stroke: ${({ theme }) => theme.white};
		animation: ${rouletteStateless} 5s infinite;
	}
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.text};
	text-align: center;
	font-size: 1.5rem;
	font-weight: 400;
	margin-bottom: 4rem;
`;
