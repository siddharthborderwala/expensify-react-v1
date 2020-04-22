import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h4>{description}</h4>
		</Link>
		<p>
			&cent; {amount} - {createdAt}
		</p>
	</div>
);

export default ExpenseListItem;
