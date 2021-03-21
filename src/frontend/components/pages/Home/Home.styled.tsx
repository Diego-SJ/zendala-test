import styled from 'styled-components';
import { addOpacity } from '../../../theme';

export const UserCard = styled.div`
	width: 100%;
	height: 8rem;
	border-radius: ${({ theme }) => theme.borderRadius.md};
	background: ${({ theme }) => theme.colors.melon};
	padding: 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		height: 10rem;
	}
`;

export const UserAvatar = styled.img`
	height: 90%;
	border-radius: 50rem;
	border: 3px solid ${addOpacity('#000000', 0.2)};
	margin-right: 1rem;
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
	font-size: 1.5rem;
	margin: 0;
	text-shadow: 0 0 3px 3px #000000;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		font-size: 2.5rem;
	}
`;

export const UserEmail = styled.p`
	color: #ffffff;
	font-size: 0.9rem;
	margin: 0;
	text-shadow: 0 0 3px 3px #000000;

	@media screen and (min-width: ${({ theme }) => theme.breakPoints.sm}) {
		font-size: 1.5rem;
	}
`;
