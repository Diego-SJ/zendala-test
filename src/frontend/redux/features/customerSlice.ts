import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getContracts } from '../../../core/config/contracts';
import { createCustomer } from '../../../core/usecases/customer/createCustomer';
import { deleteCustomer } from '../../../core/usecases/customer/deleteCustomer';
import { getCustomers } from '../../../core/usecases/customer/getCustomers';
import { getCustomersFromFirebase } from '../../../core/usecases/customer/getCustomersFromFirebase';
import { saveCustomersInFirebase } from '../../../core/usecases/customer/saveCustomersInFirebase';
import { ICustomer } from '../../typings/types';
import { AppDispatch, AppState } from '../store';
import { handleCustomerForm, handleModalDetail } from './appSlice';

const { customerContract } = getContracts();

interface ICustomerList {
	list: ICustomer[];
	loading: boolean;
	error?: string;
}

interface ICustomerSlice {
	currentCustomer?: ICustomer;
	loading: boolean;
	error?: string;
	customers: ICustomerList;
}

const initialState: ICustomerSlice = {
	currentCustomer: undefined,
	loading: false,
	error: undefined,
	customers: { list: [], loading: false, error: undefined }
};

const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		resetCustomerSlice: () => initialState,
		setFetching(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
			state.error = undefined;
		},
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload;
			state.loading = false;
		},
		fetchingCustomers(state) {
			state.customers.error = undefined;
			state.customers.loading = true;
		},
		setCustomers(state, action: PayloadAction<ICustomer[]>) {
			state.customers.list = action.payload;
			state.customers.error = undefined;
			state.customers.loading = false;
			state.error = undefined;
		},
		setCustomersError(state, action: PayloadAction<string>) {
			state.customers.error = action.payload;
			state.customers.loading = false;
		},
		setCustomer(state, action: PayloadAction<ICustomer>) {
			state.currentCustomer = action.payload;
			state.error = undefined;
		}
	}
});

export const {
	resetCustomerSlice,
	fetchingCustomers,
	setCustomers,
	setCustomersError,
	setFetching,
	setError,
	setCustomer
} = customerSlice.actions;

export default customerSlice.reducer;

export const getCostumersAction = () => async (dispatch: AppDispatch, getState: AppState) => {
	try {
		dispatch(fetchingCustomers());
		const { user } = getState().user;

		const customers = await getCustomers(customerContract);
		const firebaseCustomers = await getCustomersFromFirebase(customerContract, user?.uid!);

		const customerList = customers.filter((customer) => {
			return firebaseCustomers.find((cust) => cust.id === customer.id);
		});

		dispatch(setCustomers(customerList));
	} catch (error) {
		dispatch(setCustomersError(error.message));
	}
};

export const createCustomerAction = (customer: ICustomer, reset: () => void) => async (
	dispatch: AppDispatch,
	getState: AppState
) => {
	try {
		dispatch(setFetching(true));
		const {
			customer: { customers },
			user: { user }
		} = getState();

		const newCustomer = await createCustomer(customerContract, customer);
		const customerList = [...customers.list, newCustomer];

		await saveCustomersInFirebase(customerContract, user?.uid!, customerList);
		dispatch(setCustomers(customerList));

		dispatch(handleCustomerForm(false));
		reset();
		dispatch(setFetching(false));
	} catch (error) {
		dispatch(setError(error.message));
	}
};

export const deleteCustomerAction = () => async (dispatch: AppDispatch, getState: AppState) => {
	try {
		dispatch(setFetching(true));
		const { currentCustomer, customers } = getState().customer;
		const { user } = getState().user;

		const result = await deleteCustomer(customerContract, currentCustomer?.id!);

		if (result) {
			const customerList = customers.list.filter((customer) => customer.id !== currentCustomer?.id);

			dispatch(setCustomers(customerList));
			await saveCustomersInFirebase(customerContract, user?.uid!, customerList);

			dispatch(setFetching(false));
			dispatch(handleModalDetail(false));
		}
	} catch (error) {
		dispatch(setError(error.message));
	}
};
