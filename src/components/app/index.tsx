import React from 'react';
import { useSelector } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { RootState } from '../../redux/store';
import Router from '../../routes/Router';
import Theme from '../../theme';
import BottomMenu from '../layout/BottomMenu';

function App() {
	const { isLoggedIn } = useSelector(({ user }: RootState) => user);
	return (
		<SnackbarProvider maxSnack={3}>
			<Theme>
				<Router />
				{isLoggedIn && <BottomMenu />}
			</Theme>
		</SnackbarProvider>
	);
}

export default App;
