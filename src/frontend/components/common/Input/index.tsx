import styled from 'styled-components';
import { addOpacity } from '../../../theme';

const Input = styled.input`
	width: 100%;
	height: 3rem;
	max-height: 3rem;
	border: 1px solid transparent;
	padding: 0.7rem 1rem;
	margin: 0.3rem 0;
	border-radius: ${({ theme }) => theme.borderRadius.xs};
	background: ${({ theme }) => addOpacity(theme.asset, 0.1)};
	color: ${({ theme }) => theme.text};
	outline: none;
	transition: all 0.2s;
	font-size: 1rem;

	&:focus {
		border: 1px solid ${({ theme }) => theme.asset};
		background: ${({ theme }) => addOpacity(theme.asset, 0.12)};
	}

	&::placeholder {
		color: ${({ theme }) => addOpacity(theme.asset, 0.8)};
	}

	&:disabled {
		background: ${({ theme }) => addOpacity(theme.asset, 0.7)};
	}
`;

export default Input;
