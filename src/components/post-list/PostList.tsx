import PostCard from './PostCard';
import { AreaEnum } from '@/types/postTypes';
import Link from 'next/link';
import PlaneIcon from '../../../public/svgIcons/plane';
import Spinner from '../Spinner';
import { useAreaTopPosts } from '@/hooks/queries/post/area-top-posts';

interface PostListProps {
	areaName: AreaEnum;
	title: string;
}

const PostList = ({ areaName, title }: PostListProps) => {
	const { data, loading } = useAreaTopPosts({ area: areaName });
	const topPosts = data?.topPostsByArea;

	let contents;
	if (loading) {
		contents = <Spinner className='py-14 px-10' />;
	} else if (topPosts && topPosts?.length < 1) {
		contents = (
			<h3 className='py-16 px-8 text-secondary-mid-gray'>No Post yet</h3>
		);
	} else {
		contents = topPosts?.map((post) => {
			return <PostCard key={post._id} postData={post} />;
		});
	}

	return (
		<>
			<div className='inline-flex items-center group'>
				<Link
					href={`/posts/${areaName}`}
					className='font-titillium font-[900] text-3xl text-stroke-shadow-secondary pb-1 pr-4 hover:cursor-pointer hover:text-stroke-shadow underline underline-offset-8 decoration-gray-300'
				>
					{title}
				</Link>
				<PlaneIcon
					width={32}
					height={32}
					className='group-hover:translate-x-[10%] group-hover:-translate-y-[10%]'
				/>
			</div>

			<div className='flex'>
				<div className='flex overflow-x-auto no-scrollbar space-x-4  px-2 pt-5 pb-8'>
					{contents}
					{topPosts && topPosts?.length >= 3 && (
						<Link
							href={`/posts/${areaName}`}
							className='self-end px-4 min-w-fit underline underline-offset-4  text-secondary-dark-gray hover:cursor-pointer hover:brightness-150'
						>
							View All...
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default PostList;
