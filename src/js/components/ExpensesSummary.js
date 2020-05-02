import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getTotalAmount from './../selectors/expenses-total';
import getVisibleExpenses from './../selectors/expenses';

export const ExpensesSummary = ({ totalExpenses, expensesTotalAmount }) => {
	const expWord = totalExpenses === 1 ? 'expense' : 'expenses';
	return (
		<div className="page-header">
			<div className="content-container">
				<h2 className="page-header__title">
					Viewing <span>{totalExpenses.toString()}</span> {expWord.toString()} totalling{' '}
					<span>{expensesTotalAmount.toString()}</span>
				</h2>
				<div className="page-header__actions">
					<Link className="btn" to="/create">
						Add Expense
					</Link>
				</div>
			</div>
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
