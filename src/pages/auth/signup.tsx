import { useState } from 'react';
import { NextPage } from 'next';
import InputField from '@/components/input-field/InputField';
import CustomButton from '@/components/button/CustomButton';
import Link from 'next/link';
import HomeIcon from '../../../public/svgIcons/home';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupSchemaType } from '@/types/zod';
import { useRouter } from 'next/router';
import ErrorIcon from '@public/svgIcons/error';
import { useSignup } from '@/hooks/mutations/user/signup';

const SignUpPage: NextPage = () => {
	const [error, setError] = useState('');
	const [signup] = useSignup();

	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupSchemaType>({
		resolver: zodResolver(signupSchema),
	});

	const onSubmit = async (data: SignupSchemaType) => {
		try {
			const res = await signup({
				variables: {
					username: data.username,
					email: data.email,
					password: data.password,
				},
			});
			const created = res.data?.signup;

			if (!created) return setError('Fail to create a User.');
			router.push('/auth/login');
		} catch (error) {
			setError('Something went wrong.');
		}
	};

	return (
		<>
			<div className='h-[100vh] bg-[url("/image/travel-2.jpg")]  bg-cover bg-center relative'>
				<div className='flex-block py-20 mx-auto'>
					<Link
						href={'/home'}
						className='inline-block mb-3 hover:scale-110 absolute top-[3%] left-[10%] backdrop-blur-lg p-2 rounded-full bg-white/30'
					>
						<HomeIcon width={28} height={28} fill='#413F42' />
					</Link>
					<form
						className='flex flex-col w-[90%] mx-auto  max-h-[600px] min-h-[300px] max-w-[470px] grow justify-center rounded-xl backdrop-blur-xl bg-black/30 py-14 px-3'
						onSubmit={handleSubmit(onSubmit)}
					>
						<h1 className='text-2xl text-zinc-100 text-center'>SignUp</h1>
						<div className='space-y-4 pb-10'>
							<InputField
								label='Username'
								register={register}
								error={errors.username?.message}
								labelWhite
							/>
							<InputField
								label='Email'
								type='email'
								register={register}
								error={errors.email?.message}
								labelWhite
							/>
							<InputField
								label='Password'
								type='password'
								placeholder='1 ~ 20 characters'
								register={register}
								error={errors.password?.message}
								labelWhite
							/>
						</div>
						<div className='w-[50%] mx-auto'>
							<CustomButton secondary type='submit'>
								SignUp
							</CustomButton>
						</div>
						<p className='text-white pt-5'>
							Already have an account?{' '}
							<Link href={'/auth/login'} className='underline'>
								Login
							</Link>
						</p>
						{error && (
							<div className='inline-flex bg-primary-pink rounded-xl items-center justify-center py-1 mt-3'>
								<ErrorIcon width={28} height={28} fill='white' />
								<p className='ml-2 text-white font-[900]'>{error}</p>
							</div>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUpPage;
