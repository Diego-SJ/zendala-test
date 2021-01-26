import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import ActivityCard from '../../common/ActivityCard';
import MainLayout from '../../layout/MainLayout';
import { Container } from './Activity.styled';

const ActivityPage = () => {
	const { savingDays } = useSelector(({ user }: RootState) => user);

	return (
		<MainLayout title="Actividad">
			<Container>
				{savingDays.map((item, index) => (
					<ActivityCard key={index} item={item} />
				))}
			</Container>
		</MainLayout>
	);
};

export default ActivityPage;
