import styled from 'styled-components';
import { addOpacity } from '../../../theme';

interface IState {
	active?: boolean;
}

export const ToggleButton = styled.button<IState>`
	width: 4rem;
	height: 2.1rem;
	min-height: 2.1rem;
	max-height: 2.1rem;
	border: none;
	background: ${({ theme }) => addOpacity(theme.textLight, 0.4)};
	border-radius: 1.8rem;
	display: grid;
	place-content: center;
	z-index: 0;
	outline: none;
	position: relative;
	cursor: pointer;
	box-sizing: border-box;
	padding: 0;
	transition: all 0.3s ease;

	${({ theme, active }) =>
		active &&
		`
    background: ${theme.blueToPink};

    & > span {
      transform: translate(55%);
      background: ${theme.white};
    }
  `}
`;

export const ToggleSwitch = styled.span`
	background: ${({ theme }) => theme.textLight};
	width: 1.7rem;
	max-width: 1.7rem;
	min-width: 1.7rem;
	height: 1.7rem;
	min-height: 1.7rem;
	max-height: 1.7rem;
	border-radius: 50rem;
	box-shadow: 0 0 0.5rem -0.1rem ${({ theme }) => addOpacity(theme.black, 0.3)};
	transform: translate(-55%);
	transition: all 0.5s ease;
`;
