import { Post } from '@/types/postTypes';
import Image from 'next/image';
import AreaTag from '../area-tag/AreaTag';
import Link from 'next/link';
import StarRating from '../star-rating/StarRating';
import { isNewPost } from '@/helpers/dateDisplay';
import NewPostTag from './NewPostTag';

interface PostCardProps {
	postData: Post;
}

const PostCard = ({ postData }: PostCardProps) => {
	const {
		_id,
		title,
		country,
		city,
		area,
		imageUrl,
		rating,
		userName,
		updatedAt,
	} = postData;

	return (
		<>
			<Link
				href={`/posts/${area}/${_id}`}
				className='flex flex-col rounded shadow-xl min-w-[200px] w-[200px] md:min-w-[250px] hover:brightness-75 relative bg-secondary-light-gray'
			>
				<Image
					className='w-full aspect-[2/1.5] object-cover'
					src={imageUrl || '/image/travel-1.jpg'}
					alt='post-image'
					width={0}
					height={0}
					sizes='100vw'
					unoptimized={true}
				/>
				{isNewPost(updatedAt) && (
					<NewPostTag className='absolute left-[2%] top-[2%]' />
				)}

				<div className='px-6 py-3'>
					<div className='font-bold text-xl mb-2'>{title}</div>
					<p className='text-gray-700 text-base'>{`${city}, ${country}`}</p>
					<p className='text-sm pt-2'>{`Posted By: ${userName}`}</p>
				</div>
				<div className='mt-auto px-6 pb-2 flex justify-between'>
					<StarRating value={rating} readonly size={18} />
					<AreaTag areaName={area} />
				</div>
			</Link>
		</>
	);
};

export default PostCard;
