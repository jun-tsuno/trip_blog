import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { CreatePostInput, Post } from '@/types/postTypes';
import { AREA_POSTS } from '@/hooks/queries/post/area-posts';
import { AREA_TOP_POSTS } from '@/hooks/queries/post/area-top-posts';

export const CREATE_POST = gql`
	mutation createPost($input: CreatePostInput!) {
		createPost(input: $input) {
			_id
			title
			description
			area
			country
			city
			rating
			postedUser
			fileIdentifier
			imageUrl
			createdAt
			updatedAt
		}
	}
`;

type Data = {
	createPost: Post;
};

type Vars = {
	input: CreatePostInput;
};

export const useCreatePost = () =>
	useMutation<Data, Vars>(CREATE_POST, {
		update(cache, { data }) {
			if (!data) return;

			const areaTopData = cache.readQuery<any>({
				query: AREA_TOP_POSTS,
				variables: { area: data.createPost.area },
			});
			const areaData = cache.readQuery<any>({
				query: AREA_POSTS,
				variables: { area: data.createPost.area },
			});

			const topPostsByArea = areaTopData?.topPostsByArea || [];
			const getAllPostsByArea = areaData?.getAllPostsByArea || [];

			cache.writeQuery({
				query: AREA_TOP_POSTS,
				variables: { area: data.createPost.area },
				data: {
					topPostsByArea: [data.createPost, ...topPostsByArea],
				},
			}),
				cache.writeQuery({
					query: AREA_POSTS,
					variables: { area: data.createPost.area },
					data: {
						getAllPostsByArea: [data.createPost, ...getAllPostsByArea],
					},
				});
		},
	});
