import { addExpense, editExpense, removeExpense } from './../../js/actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc',
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {
		description: 'Coffee',
		note: 'price increased',
		amount: 225,
		createdAt: 1000,
	});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			description: 'Coffee',
			note: 'price increased',
			amount: 225,
			createdAt: 1000,
		},
	});
});

test('should setup add expense action object with provided values', () => {
	const expenseData = {
		description: 'Tea',
		amount: '225',
		note: 'Price hike',
		createdAt: 1000,
	};
	const action = addExpense(expenseData);

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String),
		},
	});
});

test('should setup add expense object with no provided data', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0,
		},
	});
});
