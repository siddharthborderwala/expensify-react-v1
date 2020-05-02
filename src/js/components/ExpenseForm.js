import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calenderFocused: false,
			error: '',
		};
	}

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(() => ({ amount }));
	};

	onDateChange = (createdAt) => {
		if (createdAt) this.setState(() => ({ createdAt }));
	};

	onCalenderFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.description && !this.state.amount) {
			//set error state to 'Please provide description and amount'
			this.setState(() => ({ error: 'Please provide description and amount' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note,
			});
		}
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className="expense-form">
				{this.state.error && <p className="expense-form__error">{this.state.error}</p>}
				<input
					type="text"
					placeholder="Description"
					autoFocus
					value={this.state.description}
					onChange={this.onDescriptionChange}
					name="description"
					className="expense-form__description"
				/>
				<input
					type="text"
					placeholder="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
					name="amount"
					className="expense-form__amount"
				/>
				<SingleDatePicker
					date={this.state.createdAt}
					onDateChange={this.onDateChange}
					focused={this.state.calenderFocused}
					onFocusChange={this.onCalenderFocusChange}
					id="singleDatePicker"
					numberOfMonths={1}
					isOutsideRange={() => false}
					className="expense-form__date"
				/>
				<textarea
					placeholder="Add note for your expense (optional)"
					value={this.state.note}
					onChange={this.onNoteChange}
					name="note"
					className="expense-form__note"
				></textarea>
				<button className="btn btn-form">{this.props.submitBtnText}</button>
			</form>
		);
	}
}
