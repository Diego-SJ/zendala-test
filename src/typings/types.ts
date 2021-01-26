export interface IUser {
	uid: string;
	displayName: string;
	email: string;
	photoURL: string;
}

export interface ISavingDay {
	day: number;
	amount: number;
	date: string;
	status: string;
}

export interface IDayOfYear {
	day: number;
}
