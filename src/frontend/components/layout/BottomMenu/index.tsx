import React from 'react';
import { useHistory } from 'react-router-dom';
import { ItemContent, Menu, MenuItem } from './BottomMenu.styled';
import { Home, Settings } from 'react-feather';
import { Routes } from '../../../routes/routes';

//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../redux/features/appSlice';
import { RootState } from '../../../redux/store';

const BottomMenu: React.FC = (): JSX.Element => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { currentPage } = useSelector(({ app }: RootState) => app);

	const handleRoute = (path: string) => {
		history.push(path);
		dispatch(setCurrentPage(path));
	};

	return (
		<Menu>
			<MenuItem>
				<ItemContent active={currentPage === Routes.home} onClick={() => handleRoute(Routes.home)}>
					<Home />
				</ItemContent>
			</MenuItem>
			<MenuItem>
				<ItemContent
					active={currentPage === Routes.settings}
					onClick={() => handleRoute(Routes.settings)}
				>
					<Settings />
				</ItemContent>
			</MenuItem>
		</Menu>
	);
};

export default BottomMenu;
