import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 9rem);
	display: flex;
	flex-direction: column;
	padding-bottom: 3rem;
	transition: all 0.3s;
	overflow: auto;

	&::scrollbar {
		display: none;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;
