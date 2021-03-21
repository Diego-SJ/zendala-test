import React from 'react';
import { DollarSign } from 'react-feather';
import Button from '../../common/Button';
import { Container, Logo, Title } from './SignIn.styled';
import Google from '../../common/icons/Google';
import { useDispatch, useSelector } from 'react-redux';
import { signinAction } from '../../../redux/features/userSlice';
import { RootState } from '../../../redux/store';
import { Redirect } from 'react-router-dom';
import { Routes } from '../../../routes/routes';

const SignInPage: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector(({ user }: RootState) => user);

	const onSignIn = async () => {
		await dispatch(signinAction());
	};

	if (isLoggedIn) return <Redirect to={Routes.home} />;

	return (
		<Container>
			<Logo>
				<DollarSign />
			</Logo>
			<Title>Inicia sesión</Title>
			<Button text="Iniciar con Google" primary onClick={onSignIn} icon={<Google />} />
		</Container>
	);
};

export default SignInPage;
