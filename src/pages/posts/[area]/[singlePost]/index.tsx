import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import StarRating from '@/components/star-rating/StarRating';
import { dateFormatter, isNewPost } from '@/helpers/dateDisplay';
import AreaTag from '@/components/area-tag/AreaTag';
import NewPostTag from '@/components/post-list/NewPostTag';
import useAuth from '@/hooks/useAuth';
import LocationIcon from '@public/svgIcons/location';
import UserCommentIcon from '@public/svgIcons/user-comment';
import ThumbsUpIcon from '@public/svgIcons/thumbs-up';
import { usePost } from '@/hooks/queries/post/post';
import Spinner from '@/components/Spinner';
import DeletePostModal from '@/components/modal/delete-post/DeletePostModal';

const Post: NextPage = () => {
	const router = useRouter();
	const postId = router.query.singlePost as string;

	const { data, loading } = usePost({ postId });
	const post = data?.getPost;

	const { user } = useAuth();

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Layout>
				<div className='py-10 max-w-[1000px] mx-auto'>
					<div className='w-[90%] mx-auto'>
						{isNewPost(post?.updatedAt) && <NewPostTag className='mb-1' />}
						<Image
							src={post?.imageUrl || '/image/travel-1.jpg'}
							alt='post-image'
							width={0}
							height={0}
							sizes='100vw'
							unoptimized={true}
							className='w-full max-h-[300px] object-cover rounded-lg lg:max-h-[450px]'
						/>
					</div>

					<div className='py-5 text-secondary-dark-gray md:w-[90%] md:mx-auto'>
						<div className='px-2 py-5'>
							<h1>{post?.title}</h1>
							<div className='flex items-center py-2'>
								<LocationIcon width={18} height={18} className='mr-1' />
								{post?.city}, {post?.country}
								{post && <AreaTag areaName={post.area} className='ml-3' />}
							</div>
							<div className='flex items-center'>
								<ThumbsUpIcon className='mr-1' />
								<StarRating value={post?.rating} readonly size={22} />
							</div>
							<p className='text-sm'>
								Post Updated: {post?.updatedAt && dateFormatter(post.updatedAt)}
							</p>
						</div>

						<div className='relative my-10'>
							<UserCommentIcon
								width={52}
								height={52}
								className='bg-secondary-pastel-blue p-2 rounded-full absolute -translate-y-2/3 translate-x-3'
							/>
							<p className='border-2 border-secondary-pastel-blue rounded-xl py-6 px-3'>
								{post?.description}
							</p>
						</div>
					</div>

					{user?.id === post?.postedUser && (
						<div className='flex justify-end'>
							<DeletePostModal
								id={postId}
								fileIdentifier={post?.fileIdentifier}
							/>
						</div>
					)}
				</div>
			</Layout>
		</>
	);
};

export default Post;
