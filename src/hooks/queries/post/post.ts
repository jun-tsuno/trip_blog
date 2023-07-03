import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Post } from '@/types/postTypes';

export const query = gql`
	query getPost($postId: ID!) {
		getPost(postId: $postId) {
			_id
			title
			area
			country
			city
			description
			rating
			updatedAt
			postedUser
			imageUrl
			fileIdentifier
		}
	}
`;

type Data = {
	getPost: Post;
};

type Vars = {
	postId: string;
};

export const usePost = (vars: Vars) =>
	useQuery<Data, Vars>(query, { variables: vars });
