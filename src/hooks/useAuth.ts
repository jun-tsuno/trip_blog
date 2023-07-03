import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginUser } from '@/redux/store';
import { useLogin } from './mutations/user/login';

const useAuth = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state: any) => {
		return state.user;
	});
	const [authError, setAuthError] = useState('');

	const [login] = useLogin();

	const getUserData = useCallback(() => {
		const temp = sessionStorage.getItem('userData');

		if (temp !== null) {
			const userData = JSON.parse(temp);
			dispatch(setLoginUser(userData));
			return true;
		}
		return null;
	}, []);

	useEffect(() => {
		getUserData();
	}, [getUserData]);

	const userLogin = async (email: string, password: string) => {
		try {
			const res = await login({ variables: { email, password } });
			const jsonUserData = JSON.stringify(res.data?.login);
			sessionStorage.setItem('userData', jsonUserData);

			const isLoggedIn = await getUserData();
			return isLoggedIn;
		} catch (error: unknown) {
			if (error instanceof Error) {
				setAuthError(error.message);
			}
		}
	};

	const userLogout = async () => {
		sessionStorage.removeItem('userData');
		dispatch(setLoginUser(null));
		setAuthError('');
	};

	return { user, authError, userLogin, userLogout };
};

export default useAuth;
