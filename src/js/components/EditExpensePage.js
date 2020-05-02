import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';

export class EditExpensePage extends React.Component {
	formSubmitHandler = (expense) => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	expenseRemoveHandler = () => {
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h2 className="page-header__title">Edit Expense</h2>
					</div>
				</div>
				<div className="content-container">
					<div className="edit-form">
						<ExpenseForm
							expense={this.props.expense}
							onSubmit={this.formSubmitHandler}
							submitBtnText="Done"
						/>
						<button onClick={this.expenseRemoveHandler} className="btn btn-form btn-remove">
							Remove
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
