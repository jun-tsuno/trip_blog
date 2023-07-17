import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomButton from '../button/CustomButton';
import { useSelector } from 'react-redux';
import useAuth from '@/hooks/useAuth';
import UserIcon from '@public/svgIcons/user';

const navigation = [
	{ name: 'Home', href: '/home' },
	{ name: 'Post', href: '/create-post' },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
	const user = useSelector((state: any) => {
		return state.user.user;
	});
	const { userLogout } = useAuth();
	const router = useRouter();

	const handleLogout = async () => {
		await userLogout();
	};

	return (
		<>
			<Disclosure as='nav' className='text-secondary-dark-gray'>
				{({ open }) => (
					<>
						<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-7'>
							<div className='relative flex h-16 items-center justify-between'>
								<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
									<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 hover:bg-secondary-mid-gray hover:drop-shadow-lg'>
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
										) : (
											<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
										)}
									</Disclosure.Button>
								</div>
								<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
									<div className='hidden sm:ml-6 sm:flex w-full'>
										<div className='flex items-center space-x-4'>
											<Link href='/'>
												<p className='text-stroke-shadow-secondary text-sm font-[900] hover:underline underline-offset-4 p-2'>
													ShareTabi
												</p>
											</Link>
											{navigation.map((item) => (
												<Link
													key={item.name}
													href={item.href}
													className={classNames(
														router.pathname === item.href
															? 'bg-secondary-mid-gray'
															: ' hover:bg-secondary-mid-gray',
														'rounded-md px-3 py-2 text-sm font-medium drop-shadow-lg text-secondary-dark-gray'
													)}
												>
													{item.name}
												</Link>
											))}
										</div>
										<div className='ml-auto flex items-center'>
											{user ? (
												<>
													<div className='flex mr-5 items-center min-w-[100px]'>
														<UserIcon className='mr-1' />
														<p className='font-bold'>{user.username}</p>
													</div>
													<CustomButton outline onClick={handleLogout}>
														LogOut
													</CustomButton>
												</>
											) : (
												<Link href={'/auth/login'}>
													<CustomButton secondary>Login</CustomButton>
												</Link>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className='sm:hidden'>
							<div className='space-y-1 px-2 pb-3 pt-2'>
								<Link href='/'>
									<p className='text-stroke-shadow-secondary text-sm font-[900] hover:underline underline-offset-4 p-2'>
										ShareTabi
									</p>
								</Link>
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={classNames(
											router.pathname === item.href
												? 'bg-secondary-mid-gray'
												: 'hover:bg-secondary-mid-gray',
											'block rounded-md px-3 py-2 text-base font-medium text-secondary-dark-gray drop-shadow-lg'
										)}
									>
										{item.name}
									</Link>
								))}
							</div>
							<div className='w-1/2 mt-4 mb-7 mx-auto min-w-[160px] max-w-[200px]'>
								{user ? (
									<>
										<div className='flex justify-center items-center'>
											<UserIcon className='mr-1' />
											<span className='font-bold'>{user.username}</span>
										</div>
										<div className='w-1/2 mt-3 mx-auto min-w-[160px] max-w-[200px]'>
											<CustomButton outline onClick={handleLogout}>
												LogOut
											</CustomButton>
										</div>
									</>
								) : (
									<Link href={'/auth/login'}>
										<CustomButton secondary>Login</CustomButton>
									</Link>
								)}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default NavBar;
