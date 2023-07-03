import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import UploadIcon from '../../../public/svgIcons/upload';
import ImageIcon from '../../../public/svgIcons/image';
import CustomButton from '../button/CustomButton';
import axios from 'axios';

interface UploadFileProps {
	fileIdentifier: string;
	setFileIdentifier: Dispatch<SetStateAction<string>>;
	file: { file: File | null; fileName: string };
	setFile: Dispatch<
		SetStateAction<{
			file: File | null;
			fileName: string;
		}>
	>;
	uploading: boolean;
	setUploading: Dispatch<SetStateAction<boolean>>;
}

const UploadFile = (props: UploadFileProps) => {
	const {
		fileIdentifier,
		file,
		uploading,
		setFile,
		setUploading,
		setFileIdentifier,
	} = props;

	const changeFile = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		const sizeLimit = 1024 * 1024 * 2;

		if (file && file.size > sizeLimit) {
			alert('Maximum file size is 2MB!');
			return;
		}

		if (file) {
			setFile({ file: file, fileName: file.name });
		}
	};

	const imageUpload = async () => {
		const fileData = new FormData();
		fileData.append('file', file.file!);
		setUploading(true);

		await axios
			.post('/api/upload', fileData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				const fileIdentifier = response.data.fileName;

				setFileIdentifier(fileIdentifier);
				setUploading(false);
			});
	};

	const imageDelete = async () => {
		await axios.delete('/api/upload/', {
			params: { fileIdentifier },
		});
		setFile({ file: null, fileName: '' });
		setFileIdentifier('');
	};

	return (
		<>
			<div className='flex my-5 items-center'>
				<input
					id='image'
					type='file'
					accept='image/*'
					multiple={false}
					onChange={changeFile}
					className='hidden'
				/>
				<label
					htmlFor='image'
					className={`flex flex-col justify-center items-center border-2 border-dashed w-[250px] aspect-video bg-secondary-light-gray text-secondary-dark-gray text-sm cursor-pointer ${
						fileIdentifier ? 'hidden' : ''
					}`}
				>
					<UploadIcon width={60} height={60} fill='#75CAD6' />
					<p className='text-center'>Upload an Image (*optional)</p>
					<p>(Maximum 2 MB)</p>
				</label>
				<ImageIcon
					width={50}
					height={50}
					className={`${fileIdentifier ? '' : 'hidden'}`}
				/>
				<div className='py-3 px-8'>
					<CustomButton
						onClick={imageUpload}
						className={`w-32 h-10 ${fileIdentifier ? 'hidden' : ''}`}
						secondary={!!file.file}
						outline={!file.file}
						disabled={uploading || !file.file}
					>
						{uploading ? 'uploading...' : 'upload'}
					</CustomButton>
					<div className='flex'>
						<p className={`mr-10 ${uploading ? 'text-gray-500' : ''}`}>
							{file?.fileName}
						</p>
						<CustomButton
							outline
							onClick={imageDelete}
							className={`${fileIdentifier ? '' : 'hidden'}`}
						>
							Remove
						</CustomButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default UploadFile;
