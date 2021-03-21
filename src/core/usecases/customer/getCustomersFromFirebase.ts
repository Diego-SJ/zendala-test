import { ICustomer } from '../../entities/customer';
import { ICustomerContract } from '../../infrastructure/customer/contract';

export async function getCustomersFromFirebase(
	contract: ICustomerContract,
	userUid: string
): Promise<ICustomer[]> {
	return contract.getCustomersFromFirebase(userUid);
}
