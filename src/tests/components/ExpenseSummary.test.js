import React from 'react';
import { ExpensesSummary } from './../../js/components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should render Expenses Summary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary totalExpenses={1} expensesTotalAmount={235} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render Expenses Summary with more than 1 expense', () => {
	const wrapper = shallow(
		<ExpensesSummary totalExpenses={3} expensesTotalAmount={114195} />
	);
	expect(wrapper).toMatchSnapshot();
});
