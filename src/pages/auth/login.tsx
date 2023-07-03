import { NextPage } from 'next';
import InputField from '@/components/input-field/InputField';
import CustomButton from '@/components/button/CustomButton';
import Link from 'next/link';
import HomeIcon from '../../../public/svgIcons/home';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '@/types/zod';
import { useRouter } from 'next/router';
import ErrorIcon from '@public/svgIcons/error';
import useAuth from '@/hooks/useAuth';

const LoginPage: NextPage = () => {
	const { userLogin, authError } = useAuth();
	const router = useRouter();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginSchemaType) => {
		const res = await userLogin(data.email, data.password);

		if (!res) return;

		reset();
		router.push('/home');
	};

	return (
		<>
			<div className='h-[100vh] bg-[url("/image/travel-1.jpg")] bg-cover relative'>
				<div className='flex-block py-20 mx-auto'>
					<Link
						href={'/home'}
						className='inline-block mb-3 hover:scale-110 absolute top-[3%] left-[10%] backdrop-blur-lg p-2 rounded-full bg-white/30'
					>
						<HomeIcon width={28} height={28} fill='#413F42' />
					</Link>
					<form
						className='flex flex-col w-[90%] mx-auto  max-h-[500px] min-h-[300px] max-w-[470px] grow justify-center rounded-xl backdrop-blur-xl bg-black/30 py-14 px-3'
						onSubmit={handleSubmit(onSubmit)}
					>
						<h1 className='text-2xl text-zinc-100 text-center'>Login</h1>
						<div className='space-y-4 pb-10'>
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
								register={register}
								error={errors.password?.message}
								labelWhite
							/>
						</div>
						<div className='w-[50%] mx-auto'>
							<CustomButton primary type='submit'>
								Login
							</CustomButton>
						</div>
						<p className='text-white pt-5'>
							Do not have account?{' '}
							<Link href={'/auth/signup'} className='underline'>
								SignUp here
							</Link>
						</p>
						{authError && (
							<div className='inline-flex bg-primary-pink rounded-xl items-center justify-center py-1 mt-3'>
								<ErrorIcon width={28} height={28} fill='white' />
								<p className='ml-2 text-white font-[900]'>{authError}</p>
							</div>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
