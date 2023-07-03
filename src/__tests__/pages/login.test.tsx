import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from '@/pages/auth/login';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { MockedProvider } from '@apollo/client/testing';

// mock apollo provider & redux provider
const MockLoginPage = () => {
	return (
		<MockedProvider>
			<Provider store={store}>
				<LoginPage />
			</Provider>
		</MockedProvider>
	);
};

// mock push method of useRouter
const push = jest.fn();
// override push method with mock push method
jest.mock('next/router', () => ({ useRouter: () => ({ push }) }));

describe('Login', () => {
	it('navigate to home when inputs are valid', async () => {
		render(<MockLoginPage />);

		const emailInputEle = screen.getByLabelText('Email') as HTMLInputElement;
		const passwordInputEle = screen.getByLabelText(
			'Password'
		) as HTMLInputElement;
		const submitButtonEle = screen.getByRole('button', { name: /login/i });

		await act(async () => {
			fireEvent.change(emailInputEle, {
				target: { value: 'example@test.com' },
			});
			fireEvent.change(passwordInputEle, { target: { value: '12345Hoge' } });
			fireEvent.click(submitButtonEle);
		});

		expect(emailInputEle.value).toBe('');
		expect(passwordInputEle.value).toBe('');
		expect(push).toHaveBeenCalledWith('/home');
	});
});
