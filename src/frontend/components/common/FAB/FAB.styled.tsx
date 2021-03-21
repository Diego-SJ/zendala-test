import styled from 'styled-components';
import { addOpacity } from '../../../theme';

interface IContent {
	active?: boolean;
}

export const Button = styled.button`
	padding: 0.7rem;
	position: fixed;
	bottom: 5rem;
	right: 2rem;
	border: none;
	outline: none;
	border-radius: 10rem;
	display: grid;
	place-content: center;
	background: ${({ theme }) => theme.gradient1};
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.1);
	}

	& svg {
		stroke: #ffffff;
	}
`;

export const MenuItem = styled.li`
	display: grid;
	place-items: center;
`;

export const ItemContent = styled.div<IContent>`
	width: 2.2rem;
	height: 2.2rem;
	display: grid;
	place-items: center;
	color: ${({ theme }) => theme.asset};
	transition: all 0.2s;
	border-radius: 10px;
	background: ${({ theme, active }) =>
		active ? theme.bgBottomMenu : addOpacity(theme.asset, 0.15)};
	${({ active }) => active && 'transform: scale(1.1);'}

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		background: ${({ theme }) => theme.bgBottomMenu};
	}

	& svg {
		width: 1.5rem;
		height: 1.5rem;
		margin: 0;
		background: transparent;
		transition: all 0.1s;
		stroke: ${({ theme, active }) => (active ? theme.colors.white : theme.textLight)};
	}
	&:hover svg {
		stroke: ${({ theme }) => theme.colors.white};
	}
`;
