import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';
import customerReducer from './features/customerSlice';

const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	customer: customerReducer
});

const persistConfig = {
	key: 'zendala',
	version: 1,
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: persistedReducer,
	middleware: [...getDefaultMiddleware({ immutableCheck: false })]
});

export type AppDispatch = typeof store.dispatch;
export type AppState = () => RootState;

export default store;
