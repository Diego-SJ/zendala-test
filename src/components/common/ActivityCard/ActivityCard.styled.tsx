import styled from 'styled-components';
import { addOpacity } from '../../../theme';

interface IState {
	state?: string;
}

export const Card = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.secondary};
	border-radius: 1.8rem;
	transition: all 0.3s;
	display: grid;
	grid-template-columns: 0.1fr auto;
	column-gap: 1rem;
	padding: 0.7rem;
	cursor: pointer;
	margin: 0 0 1rem 0;
`;

export const CardIcon = styled.div<IState>`
	display: grid;
	place-content: center;
	border: 3px solid ${({ theme }) => theme.asset};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	width: 5rem;
	height: 5rem;
	background: ${({ theme }) => addOpacity(theme.asset, 0.2)};

	& > svg {
		width: 3rem;
		height: 3rem;
		stroke: ${({ theme }) => theme.blue};
		stroke-width: 1.5;
	}

	${({ theme, state }) =>
		state === 'complete' &&
		`
    border: 4px solid ${theme.success};
    background: ${addOpacity(theme.success, 0.2)};

    & > svg {
      stroke: ${theme.success} !important;
    }
  `}

	${({ theme, state }) =>
		state === 'pending' &&
		`
    border: 4px solid ${theme.asset};
    background: ${addOpacity(theme.asset, 0.2)};

    & > svg {
      stroke: ${theme.asset} !important;
    }
  `}
`;

export const CardContent = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	row-gap: 0rem;
	place-items: center;
`;

export const CardInfo = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CardDate = styled.span`
	font-weight: 300;
	color: ${({ theme }) => theme.textLight};
`;

export const CardAmount = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
	text-align: left;
	color: ${({ theme }) => theme.text};
`;

export const CardStatus = styled.span`
	width: 6rem;
	color: ${({ theme }) => theme.white};
	font-size: 1rem;
	font-weight: 500;
	background: ${({ theme }) => theme.blueToPink};
	border-radius: ${({ theme }) => theme.borderRadius.sm};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.1rem 0;
`;
