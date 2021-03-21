export interface IUser {
	uid: string;
	displayName: string;
	email: string;
	photoURL: string;
}

export interface IAddress {
	line1?: string;
	line2?: string;
	line3?: string;
	postal_code?: string;
	state?: string;
	city?: string;
	country_code?: string;
}

export interface IStore {
	reference?: string;
	barcode_url?: string;
}

export interface ICustomer {
	id?: string;
	creation_date?: string;
	name: string;
	last_name?: string;
	email: string;
	phone_number?: string;
	external_id?: string;
	status?: string;
	balance?: number;
	address?: IAddress;
	store?: IStore;
	clabe?: string;
}
