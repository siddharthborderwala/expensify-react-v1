////expensesTotalAmount
export default (expenses = []) => {
	if (expenses.length === 0) return 0;
	const total = expenses.reduce(
		(prevTotal, expense) => prevTotal + parseInt(expense.amount, 10),
		0
	);
	return total;
};
