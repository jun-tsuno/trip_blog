import { NextPage } from 'next';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getAreaName } from '@/helpers/getAreaName';
import { AreaEnum } from '@/types/postTypes';
import PostPagination from '@/components/pagination/PostPagination';
import BalloonIcon from '../../../../public/svgIcons/balloon';
import NoPostIcon from '../../../../public/svgIcons/no-post';
import Spinner from '@/components/Spinner';
import { useAreaPosts } from '@/hooks/queries/post/area-posts';

const AreaPage: NextPage = () => {
	const router = useRouter();
	const area = router.query.area as AreaEnum;

	const { data, loading } = useAreaPosts({ area });
	const areaPosts = data?.getAllPostsByArea;

	const areaName = getAreaName(area as string);

	let contents;

	if (loading)
		return (
			<Spinner
				className='absolute top-1/2 left-1/2 -translate-x-1/2'
				size={40}
			/>
		);

	if (areaPosts && areaPosts?.length < 1) {
		contents = (
			<div className='flex flex-col items-center py-20'>
				<NoPostIcon width={100} height={100} fill='#413F42' />
				<h2 className='font-semibold text-secondary-dark-gray py-3'>
					No Post yet
				</h2>
				<Link
					href={'/create-post'}
					className='underline underline-offset-4 hover:scale-105 hover:text-primary-pink'
				>
					{'>>'} Share your experience
				</Link>
			</div>
		);
	} else {
		contents = areaPosts && (
			<PostPagination itemsPerPage={5} items={areaPosts} />
		);
	}

	return (
		<Layout>
			<>
				<div className='py-10 max-w-[1000px] mx-auto'>
					<div className='flex items-center'>
						<h1 className='font-titillium font-[900] text-3xl text-stroke-shadow-secondary underline underline-offset-8 decoration-gray-300 pr-5'>
							{areaName}
						</h1>
						<BalloonIcon width={32} height={32} />
					</div>
					{contents}
				</div>
			</>
		</Layout>
	);
};

export default AreaPage;
