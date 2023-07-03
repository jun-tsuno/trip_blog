import React from 'react';
import LargePostCard from '../post-list/LargePostCard';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface AreaPageItemsProps {
	currentItems: any[];
}

const AreaPageItems = ({ currentItems }: AreaPageItemsProps) => {
	const router = useRouter();
	const areaName = router.query.area;

	return (
		<>
			<div className='py-8 space-y-5'>
				{currentItems &&
					currentItems.map((post) => {
						return (
							<div key={post._id} className='hover:brightness-95'>
								<Link href={`/posts/${areaName}/${post._id}`}>
									<LargePostCard postData={post} />
								</Link>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default AreaPageItems;
