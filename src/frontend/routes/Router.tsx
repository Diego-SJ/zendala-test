import React from 'react';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import { Routes } from './routes';

// views
import Home from '../components/pages/Home';
import Settings from '../components/pages/Settings';
import SignIn from '../components/pages/SignIn';
import Customers from '../components/pages/Customers';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PrivateRoute = (props: RouteProps) => {
	const { isLoggedIn } = useSelector(({ user }: RootState) => user);

	if (!isLoggedIn) return <Redirect to={Routes.root} />;

	return <Route {...props} />;
};

const Router: React.FC = (): JSX.Element => {
	return (
		<Switch>
			<PrivateRoute path={Routes.customers} component={Customers} />
			<PrivateRoute path={Routes.settings} component={Settings} />
			<PrivateRoute path={Routes.home} component={Home} />
			<Route path={Routes.root} component={SignIn} />
		</Switch>
	);
};

export default Router;
