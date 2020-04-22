import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from './../../js/components/ExpenseDashboard';

test('should render expenses dashboard page correctly', () => {
	const wrapper = shallow(<ExpenseDashboard />);
	expect(wrapper).toMatchSnapshot();
});
