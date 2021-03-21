import styled from 'styled-components';
import { addOpacity } from '../../../theme';

interface IContent {
	active?: boolean;
}

export const Menu = styled.ul`
	width: 100%;
	height: 4rem;
	position: fixed;
	bottom: -1.2rem;
	left: 50%;
	transform: translateX(-50%);
	list-style: none;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0;
	border-radius: ${({ theme }) => theme.borderRadius.sm} ${({ theme }) => theme.borderRadius.sm} 0 0;
	background: ${({ theme }) => theme.secondary};
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
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
		stroke: ${({ theme, active }) => active ? theme.colors.white : theme.textLight};
	}
	&:hover svg {
		stroke: ${({ theme }) => theme.colors.white};
	}
`;
