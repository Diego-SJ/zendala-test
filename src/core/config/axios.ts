import Axios from 'axios';
import moment from 'moment';
import store from '../../frontend/redux/store';

export interface IFrontError {
	title?: string;
	message?: string;
	error?: Error;
}

export class frontError extends Error {
	date?: string;

	constructor({ message }: IFrontError) {
		super();

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, frontError);
		}
		this.message = message?.toString() || this.message;
		this.date = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a').toString();
	}
}

export const openpayApiVersion = 'v1';
export const openpayId: string = process.env.REACT_APP_OPENPAY_ID as string;
export const openpayApi: string = process.env.REACT_APP_OPENPAY_API as string;
const openpaySecretKey: string = process.env.REACT_APP_OPENPAY_SECRET_KEY as string;

export const openpayAPI = Axios.create({
	baseURL: `${openpayApi}/${openpayApiVersion}/${openpayId}`
});

openpayAPI.interceptors.response.use(undefined, (error) => {
	if (error.response) {
		return Promise.reject(new frontError({ message: error.response.data.error }));
	}

	return Promise.reject(error);
});

openpayAPI.interceptors.request.use(function (config) {
	const state = store.getState();
	if (state.user.isLoggedIn) {
		config.auth = { username: openpaySecretKey, password: '' };
	}
	return config;
}, undefined);
