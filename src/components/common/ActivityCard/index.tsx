import React from 'react';
import { AlertCircle, AlertTriangle, Star } from 'react-feather';
import { addCommas } from '../../../tools/formatters';
import { ISavingDay } from '../../../typings/types';
import {
	Card,
	CardAmount,
	CardContent,
	CardDate,
	CardIcon,
	CardInfo,
	CardStatus
} from './ActivityCard.styled';

interface IProps {
	item: ISavingDay;
}

const ActivityCard: React.FC<IProps> = ({ item }) => {
	const { status, date, day, amount } = item;
	const getIcon = () => {
		switch (status) {
			case 'complete':
				return <Star />;
			case 'pending':
				return <AlertTriangle />;
			default:
				return <AlertCircle />;
		}
	};
	return (
		<Card>
			<CardIcon state={status}>{getIcon()}</CardIcon>
			<CardContent>
				<CardDate>{date}</CardDate>
				<CardInfo>
					<CardAmount>{`$${addCommas(amount.toString())}`}</CardAmount>
					<CardStatus>{`${day} / 365`}</CardStatus>
				</CardInfo>
			</CardContent>
		</Card>
	);
};

export default ActivityCard;
