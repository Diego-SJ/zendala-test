import { ICustomer } from '../../entities/customer';

export interface ICustomerContract {
	createCustomer(customer: ICustomer): Promise<ICustomer>;
	updateCustomer(customerId: string, customer: ICustomer): Promise<ICustomer>;
	deleteCustomer(customerId: string): Promise<boolean>;
	getCustomers(): Promise<ICustomer[]>;
	saveCustomersInFirebase(userUid: string, customers: ICustomer[]): Promise<void>;
	getCustomersFromFirebase(userUid: string): Promise<ICustomer[]>;
}
