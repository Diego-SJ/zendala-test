import { ICustomer } from '../../entities/customer';
import { ICustomerContract } from '../../infrastructure/customer/contract';

export function createCustomer(
	contract: ICustomerContract,
	customer: ICustomer
): Promise<ICustomer> {
	return contract.createCustomer(customer);
}
