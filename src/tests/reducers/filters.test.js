import filtersReducer from './../../js/reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month'),
	});
});

test('should sort by the amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should sort by date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined,
	};
	const action = {
		type: 'SORT_BY_DATE',
	};
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filters', () => {
	const text = 'bill';
	const action = { type: 'SET_TEXT_FILTER', searchText: text };
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe(text);
});

test('should set start date filter', () => {
	const startDate = 1000;
	const action = { type: 'SET_START_DATE', startDate };
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toBe(startDate);
});

test('should set end date', () => {
	const endDate = 1000;
	const action = { type: 'SET_END_DATE', endDate };
	const state = filtersReducer(undefined, action);
	expect(state.endDate).toBe(endDate);
});
