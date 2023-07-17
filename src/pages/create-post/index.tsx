import { useState } from 'react';
import { NextPage } from 'next';
import Layout from '@/components/Layout';
import useAuth from '@/hooks/useAuth';
import LoginWarning from '@/components/create-post/LoginWarning';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostSchema, CreatePostSchemaType } from '@/types/zod';
import { AreaEnum } from '@/types/postTypes';
import PostInputFields from '@/components/create-post/PostInputFields';
import UploadFile from '@/components/create-post/UploadFile';
import CustomButton from '@/components/button/CustomButton';
import { useCreatePost } from '@/hooks/mutations/post/create-post';

const CreatePost: NextPage = () => {
	const { user } = useAuth();
	const [createPost] = useCreatePost();
	const [selectOption, setSelectOption] = useState<AreaEnum | null>(null);
	const [selectOptionError, setSelectOptionError] = useState<boolean>(false);

	const [fileIdentifier, setFileIdentifier] = useState('');
	const [uploading, setUploading] = useState(false);
	const [file, setFile] = useState<{ file: File | null; fileName: string }>({
		file: null,
		fileName: '',
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CreatePostSchemaType>({
		resolver: zodResolver(createPostSchema),
	});

	const onSubmit = async (data: CreatePostSchemaType) => {
		if (!selectOption) {
			setSelectOptionError(true);
			return;
		}

		const dataToSend = {
			...data,
			area: selectOption,
			postedUser: user!.id,
			fileIdentifier: fileIdentifier,
		};

		try {
			await createPost({ variables: { input: dataToSend } });
			reset();
			setFile({ file: null, fileName: '' });
			setFileIdentifier('');
			setSelectOption(null);
			alert('Added successfully!');
		} catch (error) {
			alert('Something went wrong. Fail to create.');
		}
	};

	if (!user)
		return (
			<Layout>
				<LoginWarning />
			</Layout>
		);

	return (
		<>
			<Layout>
				<div className='max-w-[800px] mx-auto'>
					<h2 className='py-4 font-titillium font-[900] text-2xl text-stroke-shadow-secondary'>
						Create a Post
					</h2>
					<div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<PostInputFields
								selectOption={selectOption}
								setSelectOption={setSelectOption}
								selectOptionError={selectOptionError}
								uploading={uploading}
								register={register}
								errors={errors}
							/>
							<UploadFile
								fileIdentifier={fileIdentifier}
								setFileIdentifier={setFileIdentifier}
								file={file}
								setFile={setFile}
								uploading={uploading}
								setUploading={setUploading}
							/>
							<div className='max-w-[300px] mx-auto py-8'>
								<CustomButton primary type='submit' disabled={uploading}>
									Submit
								</CustomButton>
							</div>
						</form>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default CreatePost;
