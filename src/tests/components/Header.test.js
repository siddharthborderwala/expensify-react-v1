import React from 'react';
import { shallow } from 'enzyme';

import Header from './../../js/components/Header';

test('should render header correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();
});
