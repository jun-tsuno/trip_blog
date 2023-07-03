import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: JSX.Element | string;
	primary?: boolean;
	secondary?: boolean;
	outline?: boolean;
	className?: string;
	disabled?: boolean;
}

const CustomButton = (props: IProps) => {
	const {
		children,
		primary,
		secondary,
		outline,
		className,
		disabled,
		...rest
	} = props;

	const classes = classNames(
		className,
		'p-2 rounded-md w-full border transition duration-300 ease-in-out hover:scale-105',
		{
			'border-primary-pink bg-primary-pink text-white': primary,
			'border-primary-blue bg-primary-blue text-white': secondary,
			'border-secondary-dark-gray': outline,
			'border-2 border-primary-pink bg-transparent text-primary-pink hover:bg-primary-pink hover:text-white':
				outline && primary,
			'border-2 border-primary-blue bg-transparent text-primary-blue hover:bg-primary-blue hover:text-white':
				outline && secondary,
		}
	);

	return (
		<>
			<button className={classes} {...rest} disabled={disabled}>
				{children}
			</button>
		</>
	);
};

export default CustomButton;
