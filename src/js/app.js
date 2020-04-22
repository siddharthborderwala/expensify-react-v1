//react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';

import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './../scss/styles.scss';
import './../favicon.ico';

const store = configureStore();

//for development
setTimeout(() => {
	document.querySelector('body > script:nth-child(3)').remove();
}, 2000);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
