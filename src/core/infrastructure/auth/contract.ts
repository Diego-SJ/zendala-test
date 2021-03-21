import { IUser } from '../../entities/user';

export interface IAuthContract {
	signinWithGoogle(): Promise<IUser>;
	signoutGoogle(): Promise<void>;
	deleteAccount(userUid: string): Promise<void>;
}
