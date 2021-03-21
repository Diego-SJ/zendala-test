import styled from 'styled-components';

interface ILi {
	primary?: boolean;
}

export const DetailsWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	& button {
		position: absolute;
		bottom: 0;
	}
`;

export const DetailsList = styled.ul`
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
`;
