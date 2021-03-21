import { IAddress } from './address';
import { IStore } from './store';

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
