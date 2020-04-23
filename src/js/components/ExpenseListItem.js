import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'in', {
	delimiters: {
		thousands: ',',
		decimal: '.',
	},
	abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
		trillion: 't',
	},
	currency: {
        symbol: '₹'
    }
});

numeral.locale('in');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h4>{description}</h4>
		</Link>
		<p>
			{numeral(amount / 100).format('$0,0.00')} -
			{moment(createdAt).format('MMM Do, YYYY')}
		</p>
	</div>
);

export default ExpenseListItem;
