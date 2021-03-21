import styled from 'styled-components';
import { addOpacity } from '../../../theme';

interface ISize {
	size?: 'small';
}

export const Card = styled.div<ISize>`
	width: 100%;
	background-color: ${({ theme }) => theme.secondary};
	border-radius: 1.8rem;
	transition: all 0.3s;
	display: grid;
	grid-template-columns: 0.1fr auto;
	column-gap: 1rem;
	padding: ${({ size }) => (size === 'small' ? '0.5rem' : '0.7rem')};
	cursor: pointer;
	margin: ${({ size }) => (size === 'small' ? '0.5rem 0' : '1rem 0')};
`;

export const CardIcon = styled.div<ISize>`
	display: grid;
	place-content: center;
	border: 3px solid ${({ theme }) => theme.colors.melon};
	border-radius: ${({ size, theme }) =>
		size === 'small' ? theme.borderRadius.sm : theme.borderRadius.md};
	width: ${({ size }) => (size === 'small' ? '4rem' : '5rem')};
	height: ${({ size }) => (size === 'small' ? '4rem' : '5rem')};
	background: ${({ theme }) => addOpacity(theme.colors.melon, 0.2)};

	& > svg {
		width: 3rem;
		height: 3rem;
		stroke: ${({ theme }) => theme.colors.melon};
		stroke-width: 1.5;
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const CardDescription = styled.span`
	font-weight: 300;
	color: ${({ theme }) => theme.textLight};
	text-align: start;
`;

export const CardTitle = styled.span<ISize>`
	font-size: ${({ size }) => (size === 'small' ? '1rem' : '1.5rem')};
	font-weight: 500;
	text-align: start;
	color: ${({ theme }) => theme.text};
`;
