import styled from 'styled-components';

interface IButton {
	primary?: boolean;
}

export const Button = styled.button<IButton>`
	width: 18rem;
	height: 3.5rem;
	min-height: 3.5rem;
	max-height: 3.5rem;
	border: none;
	background-color: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.textLight};
	font-size: 1.5rem;
	font-weight: 300;
	border-radius: 1.8rem;
	margin: 0.8rem;
	transition: all 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 0;
	outline: none;

	&:hover {
		transform: translateY(-0.3rem);
		cursor: pointer;
		color: ${({ theme }) => theme.text};
	}

	${({ theme, primary }) =>
		primary &&
		`
    background-image: ${theme.pinkToBlue};
    color: ${theme.white};

    &:hover {
      color: ${theme.white};
    }
  `}

	& > svg {
		width: 1.5rem;
		height: 1.5rem;
		fill: ${({ theme }) => theme.white};
		stroke: ${({ theme }) => theme.white};
		margin-right: 1rem;
	}
`;
