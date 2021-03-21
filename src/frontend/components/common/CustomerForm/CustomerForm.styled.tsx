import styled from 'styled-components';

interface IFormRow {
	columns?: number;
}

export const Form = styled.form<IFormRow>`
	width: 100%;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	& > button {
		margin-top: 3rem;
	}
`;

export const FormRow = styled.div<IFormRow>`
	width: 100%;
	display: grid;
	column-gap: 0.5rem;
	grid-template-columns: repeat(
		${({ columns }) => (columns ? columns : 'auto-fit')},
		minmax(300px, 1fr)
	);
	box-sizing: border-box;
`;

export const FormSection = styled.h4`
	font-size: ${({ theme }) => theme.fontSize.xs};
	margin: 0.5rem 0;
	padding: 0;
	color: ${({ theme }) => theme.textLight};
`;
