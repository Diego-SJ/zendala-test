import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomerAction } from '../../../redux/features/customerSlice';
import { RootState } from '../../../redux/store';
import Button from '../Button';
import { Detail, DetailsList, DetailsWrapper } from './CustomerDetail.styled';

const CustomerDetail: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const { currentCustomer, loading } = useSelector(({ customer }: RootState) => customer);

	const onDelete = () => {
		dispatch(deleteCustomerAction());
	};

	return (
		<DetailsWrapper>
			<DetailsList>
				<Detail primary>
					<span>Personal</span>
				</Detail>
				<Detail>
					<span>Nombre:</span> {`${currentCustomer?.name} ${currentCustomer?.last_name}`}
				</Detail>
				<Detail>
					<span>Teléfono:</span> {currentCustomer?.phone_number || '- - -'}
				</Detail>
				<Detail>
					<span>Correo:</span> {currentCustomer?.email}
				</Detail>
				<Detail primary>
					<span>Dirección</span>
				</Detail>
				<Detail>
					{`${currentCustomer?.address?.line1}, 
				${currentCustomer?.address?.city}, 
				${currentCustomer?.address?.state}, 
				${currentCustomer?.address?.postal_code}, 
				${currentCustomer?.address?.country_code}`}
				</Detail>
			</DetailsList>
			<Button
				disabled={loading}
				text={loading ? 'Eliminando' : 'Eliminar cliente'}
				block
				onClick={onDelete}
			/>
		</DetailsWrapper>
	);
};

export default CustomerDetail;
