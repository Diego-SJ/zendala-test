import { IAuthContract } from '../../infrastructure/auth/contract';

export function signoutGoogle(contract: IAuthContract): Promise<void> {
	return contract.signoutGoogle();
}
