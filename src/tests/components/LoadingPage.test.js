import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from './../../js/components/LoadingPage';

test('should render LoadingPage correctly', () => {
	const wrapper = shallow(<LoadingPage />);
	expect(wrapper).toMatchSnapshot();
});
