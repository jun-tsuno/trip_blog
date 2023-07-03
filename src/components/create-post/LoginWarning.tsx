import CommentIcon from '../../../public/svgIcons/comment';
import Link from 'next/link';
import CustomButton from '../button/CustomButton';

const LoginWarning = () => {
	return (
		<>
			<div className='flex flex-col items-center py-20'>
				<CommentIcon width={180} height={180} fill='#413F42' />
				<h3 className='text-secondary-dark-gray'>
					You need to Login first to create a post.
				</h3>
				<Link href={'/auth/login'} className='py-5'>
					<CustomButton outline className='px-5'>
						Login
					</CustomButton>
				</Link>
			</div>
		</>
	);
};

export default LoginWarning;
