import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getContracts } from '../../../core/config/contracts';
import { deleteAccount } from '../../../core/usecases/auth/deleteAccount';
import { signinWithGoogle } from '../../../core/usecases/auth/signinWithGoogle';
import { signoutGoogle } from '../../../core/usecases/auth/signoutGoogle';
import { Routes } from '../../routes/routes';
import { IUser } from '../../typings/types';
import { AppDispatch, AppState } from '../store';
import { resetAppSlice, setCurrentPage } from './appSlice';
import { resetCustomerSlice } from './customerSlice';

const { authContract } = getContracts();

interface IUserState {
	user?: IUser;
	isLoggedIn: boolean;
	loading: boolean;
	error?: string;
}

const initialState = {
	user: undefined,
	isLoggedIn: false,
	loading: false,
	error: undefined
} as IUserState;

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetUserSlice: () => initialState,
		setLoading(state, action: PayloadAction<boolean>) {
			state.loading = action.payload;
		},
		setUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
			state.loading = false;
			state.error = undefined;
			state.isLoggedIn = true;
		},
		setUserError(state, action: PayloadAction<string>) {
			state.error = action.payload;
			state.loading = false;
			state.isLoggedIn = false;
		},
		signOut: () => initialState
	}
});

export const { setLoading, setUser, setUserError, signOut, resetUserSlice } = userSlice.actions;

export default userSlice.reducer;

// Actions

export const signinAction = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(setLoading(true));

		const user = await signinWithGoogle(authContract);

		dispatch(setUser(user));
		dispatch(setCurrentPage(Routes.home));
	} catch (error) {
		dispatch(setUserError(error.message));
	}
};

export const signoutAction = () => async (dispatch: AppDispatch) => {
	try {
		await signoutGoogle(authContract);
		dispatch(setCurrentPage(Routes.root));

		dispatch(signOut());
		dispatch(resetAppSlice());
		dispatch(resetCustomerSlice());
		dispatch(resetUserSlice());
	} catch (error) {
		dispatch(setUserError(error.message));
	}
};

export const deleteAccountAction = () => async (dispatch: AppDispatch, getState: AppState) => {
	try {
		const { user } = getState().user;
		await deleteAccount(authContract, user!.uid);

		dispatch(signoutAction());
	} catch (error) {
		dispatch(setUserError(error.message));
	}
};
