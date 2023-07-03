import React, { HTMLInputTypeAttribute } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
	label: string;
	register: UseFormRegister<any>;
	registerOptions?: RegisterOptions<any>;
	type?: string;
	placeholder?: string;
	error?: string;
	min?: string | number;
	max?: string | number;
	textArea?: boolean;
	labelWhite?: boolean;
	className?: string;
}

const InputField = ({
	label,
	register,
	registerOptions,
	type,
	placeholder,
	error,
	min,
	max,
	textArea,
	className,
	labelWhite,
	...rest
}: InputProps) => {
	return (
		<div className={`flex flex-col items-start ${className}`}>
			<label
				htmlFor={label}
				className={`pb-2 ${
					labelWhite ? 'text-zinc-100' : 'text-secondary-dark-gray'
				}`}
			>
				{label}
			</label>
			{!textArea ? (
				<input
					id={label}
					type={type || 'text'}
					placeholder={placeholder || ''}
					autoComplete='off'
					min={min}
					max={max}
					{...register(
						label.toLowerCase(),
						registerOptions ? registerOptions : { required: true }
					)}
					{...rest}
					className='border-2 border-slate-200 rounded-md p-2 w-full bg-slate-100'
				/>
			) : (
				<textarea
					id={label}
					maxLength={300}
					placeholder='Maximum characters: 300'
					{...register(
						label.toLowerCase(),
						registerOptions ? registerOptions : { required: true }
					)}
					{...rest}
					className='border-2 border-slate-200 rounded-md p-2 w-full h-[300px] sm:h-[180px] bg-slate-100'
				/>
			)}

			{error && (
				<p className='pt-2 text-sm font-semibold text-red-400'>** {error} **</p>
			)}
		</div>
	);
};

export default InputField;
