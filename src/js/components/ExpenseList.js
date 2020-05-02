import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export const ExpenseList = (props) => (
	<div className="expense-list">
		<div className="content-container">
			<div className="expense-list__title">
				<p>Expense</p>
				<p>Amount</p>
			</div>
			<div className="expense-list__list">
				{props.expenses.length === 0 ? (
					<p>No expenses</p>
				) : (
					props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
				)}
			</div>
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
