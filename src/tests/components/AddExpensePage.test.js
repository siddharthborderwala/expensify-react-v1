import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './../../js/components/AddExpensePage';
import expenses from './../fixtures/expenses';
import ExpenseForm from '../../js/components/ExpenseForm';

let onSubmitHandler, history, wrapper;

beforeEach(() => {
	onSubmitHandler = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<AddExpensePage
			addExpense={onSubmitHandler}
			history={history}
			submitBtnText="Add Expense"
		/>
	);
});

test('should render AddExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle submit', () => {
	wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(onSubmitHandler).toHaveBeenLastCalledWith(expenses[1]);
});
