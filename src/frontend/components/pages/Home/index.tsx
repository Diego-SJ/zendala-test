import React from 'react';
import { useSelector } from 'react-redux';
import { Users } from 'react-feather';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../redux/store';
import { Routes } from '../../../routes/routes';
import MainLayout from '../../layout/MainLayout';
import ActionCard from '../../common/ActionCard';
import { UserAvatar, UserCard, UserEmail, UserInfo, UserName } from './Home.styled';

const Home: React.FC = (): JSX.Element => {
	const history = useHistory();
	const { user } = useSelector(({ user }: RootState) => user);

	const customerAction = () => {
		history.push(Routes.customers);
	};

	return (
		<MainLayout title="Inicio">
			<UserCard>
				<UserAvatar src={user?.photoURL} />
				<UserInfo>
					<UserName>{`¡Hola, ${user?.displayName}!`}</UserName>
					<UserEmail>{user?.email}</UserEmail>
				</UserInfo>
			</UserCard>
			<ActionCard
				title="Clientes"
				description="Ver detalles"
				icon={<Users />}
				onClick={customerAction}
			/>
		</MainLayout>
	);
};

export default Home;
