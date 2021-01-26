import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { addCommas } from '../../../tools/formatters';
import MainLayout from '../../layout/MainLayout';
import { Chart, ChartAmount, ChartTitle } from './Home.styled';

const Home = () => {
	const { totalSaving } = useSelector(({ user }: RootState) => user);

	return (
		<MainLayout title="Inicio">
			<Chart>
				<ChartTitle>Ahorro total</ChartTitle>
				<ChartAmount>{`$${addCommas(totalSaving.toString())}`}</ChartAmount>
			</Chart>
		</MainLayout>
	);
};

export default Home;
