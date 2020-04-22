import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './../../js/components/ExpenseForm';
import expenses from './../fixtures/expenses';
import moment from 'moment';

test('should render expense form correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render expense form correctly with data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {},
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New Description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input[name="description"]').simulate('change', {
		target: { value },
	});
	expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area in value change', () => {
	const value = 'My note here';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: { value },
	});
	expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid amount input', () => {
	const value = '115.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('amount')).toBe(value);
});

test('should set amount on invalid amount input', () => {
	const value = '12.625';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('amount')).toBe('');
});

test('should set amount on invalid amount input', () => {
	const value = 'abcd';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {},
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		note: expenses[0].note,
		amount: expenses[0].amount,
		createdAt: expenses[0].createdAt,
	});
});

test('should set new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('#singleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('#singleDatePicker').prop('onFocusChange')({ focused });
	expect(wrapper.state('calenderFocused')).toBe(focused);
});
