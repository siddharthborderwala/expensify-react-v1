export const setTextFilter = (searchText = '') => ({
	type: 'SET_TEXT_FILTER',
	searchText,
});

export const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});

export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});

export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate,
});

export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate,
});
