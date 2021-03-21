import styled from 'styled-components';

export const UserCard = styled.div`
	width: 100%;
	height: 10rem;
	border-radius: ${({ theme }) => theme.borderRadius.md};
	background: ${({ theme }) => theme.colors.melon};
	padding: 1rem;
	display: grid;
	columns-gap: 1rem;
	grid-template-columns: 10rem auto;
`;

export const UserAvatar = styled.img`
	height: 100%;
	border-radius: 50rem;
`;

export const UserInfo = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

export const UserName = styled.h3`
	color: #ffffff;
	font-size: 2rem;
	margin: 0;
	text-shadow: 0 0 3px 3px #000000;
`;

export const UserEmail = styled.p`
	color: #ffffff;
	font-size: 1rem;
	margin: 0;
	text-shadow: 0 0 3px 3px #000000;
`;
