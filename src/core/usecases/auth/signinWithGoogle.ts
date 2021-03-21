import { IUser } from '../../entities/user';
import { IAuthContract } from '../../infrastructure/auth/contract';

export function signinWithGoogle(contract: IAuthContract): Promise<IUser> {
	return contract.signinWithGoogle();
}
