import { ICustomer } from '../../entities/customer';
import { ICustomerContract } from '../../infrastructure/customer/contract';

export async function saveCustomersInFirebase(
	contract: ICustomerContract,
	userUid: string,
	customers: ICustomer[]
): Promise<void> {
	return contract.saveCustomersInFirebase(userUid, customers);
}
