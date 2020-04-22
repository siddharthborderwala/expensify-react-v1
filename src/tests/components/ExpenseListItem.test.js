import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './../../js/components/ExpenseListItem';
import expenses, { expenseGenerator } from './../fixtures/expenses';

test('should render expense item with expense data', () => {
	const wrapper = shallow(
		<ExpenseListItem {...expenseGenerator('1', 'Coffee', '', 350, 0)} />
	);
	expect(wrapper).toMatchSnapshot();
});
