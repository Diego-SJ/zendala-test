import { frontError } from '../../config/axios';
import firebase, { db } from '../../config/firebase';
import { IUser } from '../../entities/user';
import { IAuthContract } from './contract';

export class AuthContract implements IAuthContract {
	async signinWithGoogle(): Promise<IUser> {
		try {
			const provider = new firebase.auth.GoogleAuthProvider();
			const { user } = await firebase.auth().signInWithPopup(provider);

			return {
				uid: user?.uid,
				displayName: user?.displayName,
				email: user?.email,
				photoURL: user?.photoURL
			} as IUser;
		} catch (error) {
			throw new frontError({ message: error });
		}
	}

	async signoutGoogle(): Promise<void> {
		try {
			await firebase.auth().signOut();
		} catch (error) {
			throw new frontError({ message: error });
		}
	}

	async deleteAccount(userUid: string): Promise<void> {
		try {
			await db.doc(userUid).delete();
		} catch (error) {
			throw new frontError({ message: error });
		}
	}
}
