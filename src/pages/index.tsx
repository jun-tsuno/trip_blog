import CustomButton from '@/components/button/CustomButton';
import { NextPage } from 'next';
import Link from 'next/link';
import ClipShape from '@public/svgIcons/clip-shape';

const TopPage: NextPage = () => {
	return (
		<div className='h-[100vh] bg-secondary-light-gray'>
			<div className='flex flex-col items-center py-10 h-[100vh] lg:flex-row '>
				<div className='lg:h-[100vh] lg:flex-[35%] max-w-[500px] lg:bg-[url("/image/balloon.jpg")] bg-cover lg:flex lg:justify-center'>
					<div className='w-[250px] lg:hidden'>
						<ClipShape path='/image/balloon.jpg' />
					</div>
				</div>
				<div className='flex flex-col items-center lg:flex-[65%]'>
					<h1
						className={
							'pt-10 font-titillium font-[900] text-4xl text-stroke-shadow sm:text-6xl lg:pt-0'
						}
					>
						SHARE TABI !
					</h1>
					<div className='w-[80%] max-w-[650px] mx-auto text-center pt-5'>
						<p>
							Join our vibrant travel community and share your wanderlust-filled
							adventures with fellow travelers. Discover unique experiences
							start from here.{' '}
						</p>
						<Link href={'/home'}>
							<CustomButton primary className='max-w-[200px] mt-8'>
								Get Started
							</CustomButton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopPage;
