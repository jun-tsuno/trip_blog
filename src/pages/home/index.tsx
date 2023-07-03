import { NextPage } from 'next';
import Layout from '@/components/Layout';
import { AreaEnum } from '@/types/postTypes';
import PostList from '@/components/post-list/PostList';

const HomePage: NextPage = () => {
	return (
		<>
			<Layout>
				<div className='py-8 space-y-6 max-w-[1100px] mx-auto'>
					<PostList areaName={AreaEnum.NORTH_AMERICA} title='North America' />
					<PostList areaName={AreaEnum.SOUTH_AMERICA} title='South America' />
					<PostList areaName={AreaEnum.ASIA} title='Asia' />
					<PostList areaName={AreaEnum.OCEANIA} title='Oceania' />
					<PostList areaName={AreaEnum.EUROPE} title='Europe' />
					<PostList areaName={AreaEnum.AFRICA} title='Africa' />
					<PostList areaName={AreaEnum.OTHER} title='Other' />
				</div>
			</Layout>
		</>
	);
};

export default HomePage;
