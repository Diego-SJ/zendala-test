import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './features/appSlice';
import userReducer from './features/userSlice';

const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer
});

const persistConfig = {
	key: 'save365',
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

export default store;
