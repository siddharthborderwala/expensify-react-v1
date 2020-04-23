//react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import numeral from 'numeral';

import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';

import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './../scss/styles.scss';
import './../favicon.ico';

const store = configureStore();

numeral.register('locale', 'in', {
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't',
	},
	currency: {
		symbol: '₹',
	},
});

numeral.locale('in');

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
