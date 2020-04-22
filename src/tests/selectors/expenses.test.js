import selectExpenses from '../../js/selectors/expenses';
import moment from 'moment';
import expenses from './../fixtures/expenses';

const filterGenerator = (text, sortBy, startDate = undefined, endDate = undefined) => ({
	text,
	sortBy,
	startDate,
	endDate,
});

test('should filter by text value', () => {
	const filters = filterGenerator('e', 'date');
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date', () => {
	const filters = filterGenerator('', 'date', moment(0));
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
	const filters = filterGenerator('', 'date', undefined, moment(0).add(2, 'days'));
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
	const filters = filterGenerator('', 'date');
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
	const filters = filterGenerator('', 'amount');
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
