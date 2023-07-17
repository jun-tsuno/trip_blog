import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Post } from '@/types/postTypes';

export const query = gql`
	query getPosts {
		getPosts {
			_id
			title
			description
			area
			country
			city
			rating
			imageUrl
			updatedAt
		}
	}
`;

type Data = {
	getPosts: Post[];
};

export const useAllPosts = () => useQuery<Data>(query);
