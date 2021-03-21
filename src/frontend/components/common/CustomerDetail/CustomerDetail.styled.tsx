import styled from 'styled-components';

interface ILi {
	primary?: boolean;
}

export const DetailsWrapper = styled.ul`
	width: 100%;
	list-style: none;
	padding: 0;
`;

export const Detail = styled.li<ILi>`
	color: ${({ theme, primary }) => (primary ? theme.colors.melon : theme.textLight)};
	margin: ${({ primary }) => (primary ? '0.7rem' : '0.5rem')} 0;

	& span {
		font-weight: bold;
	}

	& button {
		margin-top: 3rem;
	}
`;
