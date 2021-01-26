import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICurrentAppState {
	currentPage: string;
	darkMode: boolean;
}

const initialState = {
	currentPage: '/',
	darkMode: true
} as ICurrentAppState;

const orderBase = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<string>) {
			state.currentPage = action.payload;
		},
		setDarkMode(state) {
			state.darkMode = !state.darkMode;
		}
	}
});

export const { setCurrentPage, setDarkMode } = orderBase.actions;

export default orderBase.reducer;
