import { IAuthContract } from '../../infrastructure/auth/contract';

export function deleteAccount(contract: IAuthContract, userUid: string): Promise<void> {
	return contract.deleteAccount(userUid);
}
