import { openpayAPI, frontError } from '../../config/axios';
import { ICustomerContract } from './contract';
import { ICustomer } from '../../entities/customer';
import { db } from '../../config/firebase';

export class CustomerContract implements ICustomerContract {
	async createCustomer(customer: ICustomer): Promise<ICustomer> {
		try {
			const response = await openpayAPI.post('/customers', customer);

			if (response.status >= 200 && response.status < 300) {
				return response.data as ICustomer;
			}

			throw new Error('Algo salió mal durante el registro.');
		} catch (error) {
			throw new frontError({ message: error });
		}
	}

	async updateCustomer(customerId: string, customer: ICustomer): Promise<ICustomer> {
		try {
			const response = await openpayAPI.put(`/customers/${customerId}`, customer);

			if (response.status === 200) {
				return response.data as ICustomer;
			}

			throw new Error(response.data.description);
		} catch (error) {
			throw new frontError({ message: error });
		}
	}

	async deleteCustomer(customerId: string): Promise<boolean> {
		try {
			const response = await openpayAPI.delete(`/customers/${customerId}`);

			if (response.status >= 200 && response.status < 300) {
				return true;
			}

			throw new Error('Algo salió mal durante el proceso.');
		} catch (error) {
			throw new frontError({ message: error });
		}
	}

	async getCustomers(): Promise<ICustomer[]> {
		try {
			const response = await openpayAPI.get('/customers');

			if (response.status >= 200 && response.status < 300) {
				return response.data as ICustomer[];
			}

			throw new Error('Algo salió mal durante el registro.');
		} catch (error) {
			throw new frontError({ message: error });
		}
	}

	async saveCustomersInFirebase(userUid: string, customers: ICustomer[]): Promise<void> {
		try {
			db.doc(userUid).set({ customers });
		} catch (error) {
			throw new frontError({ message: error });
		}
	}

	async getCustomersFromFirebase(userUid: string): Promise<ICustomer[]> {
		try {
			return db
				.doc(userUid)
				.get()
				.then((snap) => snap.data()?.customers);
		} catch (error) {
			throw new frontError({ message: error });
		}
	}
}
