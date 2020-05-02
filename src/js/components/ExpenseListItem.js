import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div className="expense-list__item">
		<div>
			<Link to={`/edit/${id}`} className="expense-list__item--link">
				{description}
			</Link>
			<p className="expense-list__item--created-at">
				{moment(createdAt).format('MMM Do, YYYY')}
			</p>
		</div>
		<p className="expense-list__item--amount">{numeral(amount / 100).format('$0,0.00')}</p>
	</div>
);

export default ExpenseListItem;
