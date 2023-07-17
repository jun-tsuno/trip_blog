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

		const res = await axios.post('/api/upload', fileData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		const fileIdentifier = res.data.fileName;
		setFileIdentifier(fileIdentifier);
		setUploading(false);
	};

	const imageDelete = async () => {
		await axios.post('/api/delete/', { fileIdentifier });

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
					<UploadIcon width={50} height={50} fill='#75CAD6' />
					<p className='text-center'>Upload an Image (*optional)</p>
					<p>(Maximum 2 MB)</p>
				</label>

				<ImageIcon
					width={50}
					height={50}
					className={`${fileIdentifier ? '' : 'hidden'}`}
				/>

				<div className='py-3 px-8 grow'>
					<div className='flex items-center gap-x-3 py-3'>
						<p className={`mr-8 text-lg ${uploading ? 'text-gray-500' : ''}`}>
							{file?.fileName}
						</p>
						<CustomButton
							outline
							onClick={imageDelete}
							className={`w-[100px] ${fileIdentifier ? '' : 'hidden'}`}
						>
							REMOVE
						</CustomButton>
					</div>

					<CustomButton
						onClick={imageUpload}
						className={`max-w-[150px] h-10 ${fileIdentifier ? 'hidden' : ''}`}
						secondary={!!file.file}
						outline={!file.file}
						disabled={uploading || !file.file}
					>
						{uploading ? 'UPLOADING...' : 'UPLOAD'}
					</CustomButton>
				</div>
			</div>
		</>
	);
};

export default UploadFile;
