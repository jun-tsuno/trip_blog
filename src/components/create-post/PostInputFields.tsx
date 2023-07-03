import React, { SetStateAction } from 'react';
import Dropdown from '../dropdown/Dropdown';
import InputField from '../input-field/InputField';
import { AreaEnum } from '@/types/postTypes';

interface PostInputFieldsProps {
	selectOption: AreaEnum | null;
	setSelectOption: React.Dispatch<SetStateAction<AreaEnum | null>>;
	selectOptionError: boolean;
	uploading: boolean;
	register: any;
	errors: any;
}

const area = [
	{ name: 'North America', value: 'NORTH_AMERICA' },
	{ name: 'South America', value: 'SOUTH_AMERICA' },
	{ name: 'Asia', value: 'ASIA' },
	{ name: 'Oceania', value: 'OCEANIA' },
	{ name: 'Europe', value: 'EUROPE' },
	{ name: 'Africa', value: 'AFRICA' },
	{ name: 'Other', value: 'OTHER' },
];

const PostInputFields = (props: PostInputFieldsProps) => {
	const { setSelectOption, selectOption, selectOptionError, errors, register } =
		props;

	return (
		<>
			<div className='max-w-[500px] space-y-3'>
				<InputField
					label='Title'
					register={register}
					error={errors.title?.message}
				/>
				<InputField
					label='Country'
					register={register}
					error={errors.country?.message}
				/>
				<InputField
					label='City'
					register={register}
					error={errors.city?.message}
				/>
				<div className='space-y-3 sm:flex sm:space-y-0 sm:justify-between'>
					<Dropdown
						label='Area'
						options={area}
						value={selectOption}
						handleSelect={setSelectOption}
						error={selectOptionError}
						className='w-[250px]'
					/>
					<InputField
						label='Rating'
						type='number'
						min='0'
						max='5'
						placeholder='1 to 5'
						register={register}
						registerOptions={{ valueAsNumber: true }}
						error={errors.rating?.message}
						className='w-[150px]'
					/>
				</div>
			</div>
			<InputField
				label='Description'
				textArea
				register={register}
				error={errors.description?.message}
				className='py-3'
			/>
		</>
	);
};

export default PostInputFields;
