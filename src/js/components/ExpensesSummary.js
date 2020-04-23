import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getTotalAmount from './../selectors/expenses-total';
import getVisibleExpenses from './../selectors/expenses';

export const ExpensesSummary = ({ totalExpenses, expensesTotalAmount }) => {
	const expWord = totalExpenses === 1 ? 'expense' : 'expenses';
	return (
		<div>
			<h4>
				Viewing {totalExpenses.toString()} {expWord.toString()} totalling {expensesTotalAmount.toString()}
			</h4>
		</div>
	);
};

const mapStateToProps = (state) => {
	const currentExpenses = getVisibleExpenses(state.expenses, state.filters);
	const totalExpenses = currentExpenses.length;
	const expensesTotalAmount = numeral(getTotalAmount(currentExpenses) / 100).format('$0,0.00');
	return {
		totalExpenses,
		expensesTotalAmount,
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
