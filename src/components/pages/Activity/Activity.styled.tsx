import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 9rem);
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 5rem;
	left: 0;
	padding: 1rem 1rem 10rem 1rem;
	transition: all 0.3s;
	overflow: auto;
`;
