import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addOpacity } from '../../../theme';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 5rem;
	left: 0;
	padding: 2rem 1rem 5rem 1rem;
	transition: all 0.3s;
	overflow: auto;
`;

export const Paragraph = styled.p`
	margin: 0.2rem 0;
	text-align: center;
	color: ${({ theme }) => addOpacity(theme.textLight, 0.5)};
	font-weight: 200;
`;

export const ParagraphLink = styled(Link)`
	margin-left: 0.5rem;
	text-decoration: underline;
`;

export const Options = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 1rem;
`;

export const Button = styled.button`
	background: transparent;
	color: #ffffff;
	border: none;
	outside: none;
  font-size: 0.875rem;
  margin: 0.5rem;
  padding: 0;
`;
