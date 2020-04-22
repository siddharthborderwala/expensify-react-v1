import moment from 'moment';

const filters = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};

const altFilters = {
	text: 'bill',
	sortBy: 'amount',
	startDate: moment(0).add(2, 'days'),
	endDate: moment(0).add(12, 'days'),
};

export { filters, altFilters };
