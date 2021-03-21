import styled from 'styled-components';
import { addOpacity } from '../../../theme';

interface IButton {
	primary?: boolean;
	block?: boolean;
}

export const Button = styled.button<IButton>`
	width: ${({ block }) => (block ? '100%' : '18rem')};
	height: 3rem;
	min-height: 3rem;
	max-height: 3rem;
	border: none;
	background-color: ${({ theme }) => addOpacity(theme.asset, 0.1)};
	color: ${({ theme }) => theme.textLight};
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: 300;
	border-radius: ${({ theme }) => theme.borderRadius.xs};
	transition: all 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 0;
	font-weight: bold;
	outline: none;

	&:hover {
		transform: translateY(-0.3rem);
		cursor: pointer;
		color: ${({ theme }) => theme.text};
	}

	${({ theme, primary }) =>
		primary &&
		`
    background-image: ${theme.gradient1};
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.white};
    }
  `}

	& > svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: ${({ theme }) => theme.white};
		stroke: ${({ theme }) => theme.white};
		margin-right: 1rem;
	}

	&:disabled {
		background: ${({ theme }) => addOpacity(theme.asset, 0.7)};
	}
`;
