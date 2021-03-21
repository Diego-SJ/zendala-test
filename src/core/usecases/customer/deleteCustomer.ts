import { ICustomerContract } from '../../infrastructure/customer/contract';

export function deleteCustomer(contract: ICustomerContract, customerId: string): Promise<boolean> {
	return contract.deleteCustomer(customerId);
}
