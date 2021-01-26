import styled, { keyframes, css } from 'styled-components';

interface IState {
	state?: 'start' | 'finished' | string;
}

const rouletteStateless = keyframes`
  0% {
    transform: scale(1) rotateY(0deg);
  }
  25% {
    transform: scale(1.5) rotateY(-180deg);
    border: 4px solid #2e82ff;
  }
  50% {
    transform: scale(1.5) rotateY(0deg);
    border: 4px solid #2e82ff;
  }
  100% {
    transform: scale(1) rotateY(0deg);
  }
`;

const rouletteStarted = keyframes`
  0% {
    transform: scale(1) rotateY(0deg);
  }
  25% {
    transform: scale(1) rotateY(-180deg);
  }
  50% {
    transform: scale(1) rotateY(0deg);
  }
  75% {
    transform: scale(1) rotateY(-180deg);
  }
  100% {
    transform: scale(1) rotateY(0deg);
  }
`;

const rouletteFinished = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div<IState>`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	transition: all 0.3s;
	overflow: hidden !important;

	${({ state }) =>
		state === 'start' &&
		`
    padding-top: 10%;
    & > button {
      opacity: 0;
      transform: translateY(10rem);
    }
  `}
	${({ state }) => state === 'finished' && 'padding-top: 10%;'}
`;

export const RouletteContent = styled.div<IState>`
	width: 10rem;
	height: 10rem;
	min-height: 10rem;
	border-radius: ${({ theme }) => theme.borderRadius.xxlg};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 6px solid ${({ theme }) => theme.blue};
	box-shadow: inset 0 0 2rem 0.1rem ${({ theme }) => theme.shadowNeon.start},
		0 0 2rem 0.1rem ${({ theme }) => theme.shadowNeon.start};
	transition: all 0.5s;

	perspective: 150rem;
	-moz-perspective: 150rem;

	${({ state }) =>
		state === '' &&
		css`
			animation: ${rouletteStateless} 5s infinite;
		`}

	${({ state }) =>
		state === 'start' &&
		css`
			width: 17rem !important;
			min-height: 17rem !important;
			height: 17rem !important;
			background: transparent !important;

			animation: ${rouletteStarted} 0.1s infinite !important;
		`}

	${({ theme, state }) =>
		state === 'finished' &&
		css`
			width: 18rem;
			min-height: 18rem;
			border: 6px solid #c45dff;
			box-shadow: inset 0 0 2rem 0.1rem ${theme.shadowNeon.end}, 0 0 2rem 0.1rem ${theme.shadowNeon.end};
			animation: ${rouletteFinished} 3s infinite ease;
		`}
`;

export const RouletteText = styled.span<IState>`
	color: ${({ theme }) => theme.textLight};
	font-size: 5rem;
	font-weight: bold;
	transition: all 1s;

	${({ state }) => state === 'start' && 'opacity: 0;'}
	${({ state }) => state === 'finished' && 'font-size: 6rem;'}
`;
