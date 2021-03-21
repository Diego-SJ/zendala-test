import styled from 'styled-components';

interface IType {
	danger?: boolean;
}

export const Card = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.secondary};
	border-radius: 1.8rem;
	transition: all 0.3s;
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 0rem 1rem;
	cursor: pointer;
	margin: 0 0 3rem 0;
	position: relative;
`;

export const CardTitle = styled.span`
	position: absolute;
	top: -1.8rem;
	left: 1rem;
	font-weight: 300;
	font-size: 1rem;
	color: ${({ theme }) => theme.textLight};
`;

export const SettingContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.8rem 0;
`;

export const SettingIcon = styled.div<IType>`
	display: grid;
	place-content: center;
	width: 2rem;
	height: 100%;
	margin-right: 1rem;

	& > svg {
		width: 1.5rem;
		height: 1.5rem;
		stroke: ${({ theme }) => theme.textLight};
		stroke-width: 1.5;
	}

	${({ theme, danger }) => danger && ` & > svg { stroke: ${theme.colors.danger}; }`}
`;

export const SettingContent = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SettingName = styled.span<IType>`
	color: ${({ theme }) => theme.text};
	font-size: 1.2rem;
	font-weight: 300;

	${({ theme, danger }) =>
		danger &&
		`
    color: ${theme.colors.danger};
    font-size: 1.2rem;
    font-weight: 300;
  `}
`;
