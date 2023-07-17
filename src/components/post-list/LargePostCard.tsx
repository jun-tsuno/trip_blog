import { Post } from '@/types/postTypes';
import Image from 'next/image';
import StarRating from '../star-rating/StarRating';
import LinesEllipsis from 'react-lines-ellipsis';

interface LargePostCardProps {
	postData: Post;
}

const LargePostCard = ({ postData }: LargePostCardProps) => {
	const { title, country, city, description, rating, userName, imageUrl } =
		postData;

	return (
		<>
			<div className='flex flex-col sm:flex-row sm:max-h-[200px] sm:max-w-[850px] rounded-lg bg-secondary-light-gray border border-secondary-mid-gray'>
				<Image
					className='object-cover w-full h-32 sm:w-[30%] sm:h-auto'
					src={imageUrl || '/image/travel-1.jpg'}
					alt='post-image'
					width={0}
					height={0}
					sizes='100vw'
					unoptimized={true}
				/>
				<div className='grow flex flex-col justify-between p-4 leading-normal text-secondary-dark-gray'>
					<h3 className='mb-2 text-2xl font-bold tracking-tight'>{title}</h3>
					<div className='flex justify-between pb-2'>
						<StarRating value={rating} readonly size={22} />
						<span className='mx-3'>Posted By: {userName ?? '-'}</span>
					</div>
					<p>{`${city}, ${country}`}</p>
					<LinesEllipsis
						className='mb-3 dark:text-gray-400'
						text={description}
						maxLine='2'
						ellipsis='...'
						trimRight
						basedOn='letters'
					/>
				</div>
			</div>
		</>
	);
};

export default LargePostCard;
