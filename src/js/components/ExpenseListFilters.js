import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
	state = {
		calenderFocused: null,
	};

	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onSortOptionChange = (e) => {
		if (e.target.value === 'date') {
			this.props.sortByDate();
		} else if (e.target.value === 'amount') {
			this.props.sortByAmount();
		}
	};

	onFocusChange = (calenderFocused) => {
		this.setState(() => ({ calenderFocused }));
	};

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
							name="filter-text"
							value={this.props.filters.text}
							onChange={this.onTextChange}
							className="input-group__item--input"
							placeholder="Search expenses here..."
						/>
					</div>
					<div className="input-group__item">
						<select
							name="sortby"
							value={this.props.filters.sortBy}
							onChange={this.onSortOptionChange}
							className="input-group__item--select"
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group__item date-range-picker">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							startDateId="0"
							endDate={this.props.filters.endDate}
							endDateId="1"
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calenderFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							isOutsideRange={() => false}
							numberOfMonths={1}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (value) => dispatch(setTextFilter(value)),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
