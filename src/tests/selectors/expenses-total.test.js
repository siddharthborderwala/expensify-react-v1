import expensesTotal from './../../js/selectors/expenses-total';
import expenses from './../fixtures/expenses';

test('should return total expenses amount', () => {
	const total = expensesTotal(expenses);
	expect(total).toBe(114195);
});

test('should return total expenses amount with one expense item in list', () => {
	const total = expensesTotal([expenses[1]]);
	expect(total).toBe(109500);
});

test('should return zero as total expenses amount when expense list is empty', () => {
	const total = expensesTotal([]);
	expect(total).toBe(0);
});