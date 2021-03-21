import React from 'react';
import { Main, MainContent, MainHeader, Title } from './MainLayout.styled';

interface IProps {
	title?: string;
}

const MainLayout: React.FC<IProps> = ({ title, children }): JSX.Element => {
	return (
		<Main>
			<MainHeader>
				<Title>{title}</Title>
			</MainHeader>
			<MainContent>{children}</MainContent>
		</Main>
	);
};

export default MainLayout;
