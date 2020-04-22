import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './../../js/components/NotFoundPage';

test('should render not found page', () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
