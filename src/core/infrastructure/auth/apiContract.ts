import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { frontError } from '../../config/axios';
import { IUser } from '../../entities/user';
import { IAuthContract } from './contract';

const firebaseConfig = {
	apiKey: 'AIzaSyCefJF9vFFj2nAcOdFGtJufz6hvSDVwWlg',
	authDomain: 'test1-d2593.firebaseapp.com',
	projectId: 'test1-d2593',
	storageBucket: 'test1-d2593.appspot.com',
	messagingSenderId: '840308951902',
	appId: '1:840308951902:web:74d525b6341ef14861ddcf'
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore().collection('zendala-users');

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
