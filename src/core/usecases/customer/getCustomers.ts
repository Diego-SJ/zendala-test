import { ICustomer } from '../../entities/customer';
import { ICustomerContract } from '../../infrastructure/customer/contract';

export function getCustomers(contract: ICustomerContract): Promise<ICustomer[]> {
	return contract.getCustomers();
}
