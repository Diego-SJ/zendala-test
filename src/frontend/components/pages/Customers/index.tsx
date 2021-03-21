import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import moment from 'moment';
import { ICustomer } from '../../../typings/types';
import ActionCard from '../../common/ActionCard';
import MainLayout from '../../layout/MainLayout';
import { User } from 'react-feather';
import FAB from '../../common/FAB';
import BottomForm from '../../common/BottomForm';
import CustomerForm from '../../common/CustomerForm';
import Modal from '../../common/Modal';
import { Container } from './Customers.styled';
import CustomerDetail from '../../common/CustomerDetail';
import { handleCustomerForm, handleModalDetail } from '../../../redux/features/appSlice';
import { getCostumersAction, setCustomer } from '../../../redux/features/customerSlice';

const CustomersPage: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const { customer, app } = useSelector((state: RootState) => state);
	const [customerList, setCustomerList] = useState<ICustomer[]>([]);
	const { customers } = customer;
	const { openModalDetail } = app;

	useEffect(() => {
		dispatch(getCostumersAction());
	}, [dispatch]);

	useEffect(() => {
		setCustomerList(customers.list);
	}, [customers.list]);

	const handleClick = (customer: ICustomer) => {
		dispatch(setCustomer(customer));
		dispatch(handleModalDetail(true));
	};

	return (
		<MainLayout title="Clientes">
			<Container>
				{customerList.map((customer, index) => (
					<ActionCard
						key={index}
						title={`${customer.name} ${customer.last_name}`}
						description={`Fecha creación: ${moment(customer.creation_date).format('DD-MM-YYYY')}`}
						icon={<User />}
						size="small"
						onClick={() => handleClick(customer)}
					/>
				))}
			</Container>
			<BottomForm
				title="Registrar cliente"
				onClose={() => dispatch(handleCustomerForm(false))}
				children={<CustomerForm />}
			/>
			<FAB onClick={() => dispatch(handleCustomerForm(true))} />
			<Modal
				open={openModalDetail}
				title="Detalle del cliente"
				onClose={() => dispatch(handleModalDetail(false))}
				children={<CustomerDetail />}
			/>
		</MainLayout>
	);
};

export default CustomersPage;
