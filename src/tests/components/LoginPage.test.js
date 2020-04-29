import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './../../js/components/LoginPage';

test('should render LoginPage component correctly', () => {
	const wrapper = shallow(<LoginPage />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<LoginPage startLogout={startLogin} />);
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
});