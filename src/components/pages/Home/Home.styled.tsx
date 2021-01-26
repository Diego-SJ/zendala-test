import styled from 'styled-components';

export const Chart = styled.div`
	width: 20rem;
	height: 20rem;
	background: transparent;
	border-radius: ${({ theme }) => theme.borderRadius.xxlg};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 6px solid #2e82ff;
	box-shadow: inset 0 0 2rem 0.1rem ${({ theme }) => theme.shadowNeon.start},
		0 0 2rem 0.1rem ${({ theme }) => theme.shadowNeon.start};
	transition: all 0.2;
`;

export const ChartTitle = styled.h3`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 400;
	color: ${({ theme }) => theme.textLight};
`;

export const ChartAmount = styled.span`
	color: ${({ theme }) => theme.text};
	font-size: 3rem;
	font-weight: 500;
	margin-top: 1rem;
`;
