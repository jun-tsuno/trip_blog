import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { Post } from '@/types/postTypes';

export const DELETE_POST = gql`
	mutation deletePost($id: String!, $fileIdentifier: String) {
		deletePost(id: $id, fileIdentifier: $fileIdentifier) {
			_id
			title
			postedUser
			area
		}
	}
`;

type Data = {
	deletePost: Pick<Post, '_id' | 'title' | 'postedUser' | 'area'>;
};

type Vars = {
	id: string;
	fileIdentifier?: string;
};

export const useDeletePost = () =>
	useMutation<Data, Vars>(DELETE_POST, {
		update(cache, { data }) {
			if (!data) return;

			cache.modify({
				fields: {
					topPostsByArea(existing = [], { readField }) {
						const newItemList = existing.filter((item: any) => {
							return readField('_id', item) !== data.deletePost._id;
						});
						return [...newItemList];
					},
					getAllPostsByArea(existing = [], { readField }) {
						const newItemList = existing?.filter((item: any) => {
							return readField('_id', item) !== data.deletePost._id;
						});
						return [...newItemList];
					},
				},
			});
		},
	});
