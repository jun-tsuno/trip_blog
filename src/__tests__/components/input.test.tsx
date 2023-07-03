import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '@/components/input-field/InputField';

const mockedRegister = jest.fn();

// Unit test
describe('Input', () => {
	it('should render label and input element', () => {
		render(<InputField label='label' register={mockedRegister} />);

		const inputEle = screen.getByRole('textbox') as HTMLInputElement;
		expect(inputEle).toBeInTheDocument();
	});

	it('should change the text of input field', () => {
		render(<InputField label='label' register={mockedRegister} />);

		const inputEle = screen.getByRole('textbox') as HTMLInputElement;
		fireEvent.change(inputEle, {
			target: { value: 'User Input' },
		});
		expect(inputEle.value).toBe('User Input');
	});

	it('input text length should be in range of min and max', () => {
		const min = 1;
		const max = 10;
		render(
			<InputField label='label' register={mockedRegister} min={min} max={max} />
		);

		const inputEle = screen.getByRole('textbox') as HTMLInputElement;
		fireEvent.change(inputEle, {
			target: { value: 'User Input' },
		});
		expect(inputEle.value.length).toBeGreaterThanOrEqual(min);
		expect(inputEle.value.length).toBeLessThanOrEqual(max);
	});

	it('should show error when it is passed error prop', () => {
		render(
			<InputField
				label='label'
				register={mockedRegister}
				error='Error message'
			/>
		);

		expect(screen.getByText(/Error message/i)).toBeInTheDocument();
	});
});
