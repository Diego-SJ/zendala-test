import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './frontend/redux/store';
import App from './frontend/components/app';
import './frontend/styles/index.css';

const persistor = persistStore(store);

const WithRouter: React.FC = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

const WithStore = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<WithRouter />
		</PersistGate>
	</Provider>
);

ReactDOM.render(
	<React.StrictMode>
		<WithStore />
	</React.StrictMode>,
	document.getElementById('root')
);
