import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__heading">Expensify App</h1>
			<p className="box-layout__tag-line">It's time to get your expenses under control</p>
			<button onClick={startLogin} className="btn btn-login">
				Login with Google
			</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
