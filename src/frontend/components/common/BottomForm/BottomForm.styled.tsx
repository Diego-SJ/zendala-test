import styled from 'styled-components';

interface IOpen {
	open?: boolean;
}

export const Container = styled.div<IOpen>`
	width: 100%;
	height: 100vh;
	position: fixed;
	bottom: ${({ open }) => (open ? '0' : '-110vh')};
	left: 0;
	z-index: 999;
	box-sizing: border-box;
	transition: all 0.3s ease-in-out;
`;

export const Children = styled.div`
	width: 100%;
	height: 90vh;
	padding: 3rem 1rem 1rem 1rem;
	position: absolute;
	bottom: 0;
	left: 0;
	border-radius: ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0 0;
	background-color: ${({ theme }) => theme.primary};
	z-index: 1;
	box-shadow: 0 -5px 1rem 0.4rem #00000020;
	overflow: auto;
`;

export const ButtonClose = styled.button`
	position: absolute;
	top: 1rem;
	right: 1.2rem;
	background: transparent;
	margin: 0;
	padding: 0;
	border: 0;
	outline: none;

	& svg {
		stroke: ${({ theme }) => theme.asset};
	}
`;

export const Title = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.sm};
	margin: -1rem 0 1rem 0;
	padding: 0;
	color: ${({ theme }) => theme.colors.melon};
`;
