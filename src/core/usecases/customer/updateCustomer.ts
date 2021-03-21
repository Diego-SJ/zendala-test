import { ICustomer } from '../../entities/customer';
import { ICustomerContract } from '../../infrastructure/customer/contract';

export function updateCustomer(
	contract: ICustomerContract,
	customerId: string,
	customer: ICustomer
): Promise<ICustomer> {
	return contract.updateCustomer(customerId, customer);
}
