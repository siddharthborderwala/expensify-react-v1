import React from 'react';
import { shallow } from 'enzyme';
import 'jest';
import Header from './../../js/components/Header';

test('should render header correctly', () => {
	const wrapper = shallow(<Header startLogout={() => {}} />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogout={startLogout} />);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});