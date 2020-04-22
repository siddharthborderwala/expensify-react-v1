import moment from 'moment';

export const expenseGenerator = (id, description, note, amount, createdAt) => ({
	id,
	description,
	note,
	amount,
	createdAt,
});

export default [
	expenseGenerator('1', 'Gum', '', 195, moment(0).valueOf()),
	expenseGenerator('2', 'Rent', '', 109500, moment(0).subtract(4, 'days').valueOf()),
	expenseGenerator('3', 'Credit Card', 'Monthly', 4500, moment(0).add(4, 'days').valueOf()),
];
