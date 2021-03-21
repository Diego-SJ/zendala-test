import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
	currentPage: string;
	darkMode: boolean;
	openCustomerForm: boolean;
	openModalDetail: boolean;
}

const initialState = {
	currentPage: '/',
	darkMode: true,
	openCustomerForm: false,
	openModalDetail: false
} as IAppState;

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		resetAppSlice: () => initialState,
		setCurrentPage(state, action: PayloadAction<string>) {
			state.currentPage = action.payload;
		},
		setDarkMode(state) {
			state.darkMode = !state.darkMode;
		},
		handleCustomerForm(state, action: PayloadAction<boolean>) {
			state.openCustomerForm = action.payload;
		},
		handleModalDetail(state, action: PayloadAction<boolean>) {
			state.openModalDetail = action.payload;
		}
	}
});

export const {
	setCurrentPage,
	setDarkMode,
	resetAppSlice,
	handleCustomerForm,
	handleModalDetail
} = appSlice.actions;

export default appSlice.reducer;
