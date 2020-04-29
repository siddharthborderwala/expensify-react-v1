import { login, logout } from './../../js/actions/auth';

test('should generate login action object', () => {
	const uid = '123abc';
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid,
	});
});

test('should generate logout action object', () => {
	const action = login();
	expect(action).toEqual({
		type: 'LOGOUT',
	});
});
