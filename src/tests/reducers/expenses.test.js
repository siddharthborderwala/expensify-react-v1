import expensesReducer from './../../js/reducers/expenses';
import expenses from './../fixtures/expenses';
import moment from 'moment';

const expenseGenerator = (id, description, note, amount, createdAt) => ({
	id,
	description,
	note,
	amount,
	createdAt,
});

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: 'sacadc',
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const newExpense = expenseGenerator('4', 'Udemy Course', '', 1000, 0);
	const action = {
		type: 'ADD_EXPENSE',
		expense: {
			...newExpense,
		},
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense by id', () => {
	const id = '2';
	const updates = {
		description: 'Coffee',
		amount: 225,
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id,
		updates,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([
		expenses[0],
		expenseGenerator('2', 'Coffee', '', 225, moment(0).subtract(4, 'days').valueOf()),
		expenses[2],
	]);
});

test('should not edit expense if id not found', () => {
	const id = 'aefas';
	const updates = {
		description: 'Coffee',
		amount: 225,
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id,
		updates,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]],
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});
