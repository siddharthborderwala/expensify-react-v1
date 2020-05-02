import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from './../actions/auth';
import { connect } from 'react-redux';

const Header = ({ startLogout }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link to="/dashboard" className="header__heading--link">
					<h1 className="header__heading--text">Expensify</h1>
				</Link>
				<button onClick={startLogout} className="btn btn-logout">
					Logout
				</button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
