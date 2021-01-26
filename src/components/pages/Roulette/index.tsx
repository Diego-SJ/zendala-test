import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { recordNewSavingAction } from '../../../redux/features/userSlice';
import { RootState } from '../../../redux/store';
import { daysOfTheYear } from '../../../tools/constants';
import { ISavingDay } from '../../../typings/types';
import Button from '../../common/Button';
import MainLayout from '../../layout/MainLayout';
import { Container, RouletteContent, RouletteText } from './Roulette.styled';
moment.locale('es');

const Roulette = () => {
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();
	const { savingDays } = useSelector(({ user }: RootState) => user);

	const [state, setState] = useState('');
	const [dayRandomly, setDayRandomly] = useState('?');

	const startRulette = () => {
		setState('start');
		setTimeout(async () => {
			const remainingDays = [...daysOfTheYear];
			savingDays.forEach((userDay) => {
				const index = remainingDays.findIndex((day) => day.day === userDay.amount);
				remainingDays.splice(index, 1);
			});
			const randomDay = remainingDays[Math.floor(Math.random() * remainingDays.length)];
			setDayRandomly(randomDay.day.toString());
			setState('finished');
		}, 5000);
	};

	const restartRullete = async () => {
		await dispatch(
			recordNewSavingAction({
				day: savingDays.length + 1,
				amount: Number(dayRandomly),
				date: moment().format('lll'),
				status: 'complete'
			} as ISavingDay)
		);
		setDayRandomly('?');
		setState('');
		enqueueSnackbar('¡Ahorro registrado!', {
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'center'
			},
			variant: 'success',
			autoHideDuration: 1500
		});
	};

	return (
		<MainLayout title="Ruleta">
			<Container state={state}>
				<RouletteContent state={state}>
					<RouletteText state={state}>{dayRandomly}</RouletteText>
				</RouletteContent>
				<Button
					text={`${state === '' ? 'Generar número' : 'Aceptar'}`}
					onClick={state === '' ? startRulette : restartRullete}
				/>
			</Container>
		</MainLayout>
	);
};

export default Roulette;
