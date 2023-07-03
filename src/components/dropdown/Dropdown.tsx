import React, { Fragment, SetStateAction } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { AreaEnum } from '@/types/postTypes';

interface DropdownProps {
	label?: string;
	options: { name: string; value: string }[];
	value: AreaEnum | null;
	error: boolean;
	className?: string;
	handleSelect: React.Dispatch<SetStateAction<AreaEnum | null>>;
}

const Dropdown = ({
	label,
	options,
	value,
	error,
	className,
	handleSelect,
}: DropdownProps) => {
	const errorMessage = 'Please select from the options.';

	return (
		<div className={className}>
			<label>{label}</label>
			<Listbox value={value} onChange={handleSelect}>
				<div className='mt-1'>
					<Listbox.Button className='relative w-full cursor-pointer border-2 border-slate-200 rounded-md bg-slate-100 p-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
						<span className='block truncate'>{value || 'Option'}</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<ChevronUpDownIcon
								className='h-5 w-5 text-gray-400'
								aria-hidden='true'
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
							{options.map((option) => (
								<Listbox.Option
									key={option.name}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
										}`
									}
									value={option.value}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{option.name}
											</span>
											{selected ? (
												<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
													<CheckIcon className='h-5 w-5' aria-hidden='true' />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
			{error && (
				<p className='pt-2 text-sm font-semibold text-red-400'>
					** {errorMessage} **
				</p>
			)}
		</div>
	);
};

Dropdown.displayName = 'Dropdown';
export default Dropdown;
