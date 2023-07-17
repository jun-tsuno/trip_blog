import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Post, AreaEnum } from '@/types/postTypes';

export const AREA_TOP_POSTS = gql`
	query topPotsByArea($area: Area!) {
		topPostsByArea(area: $area) {
			_id
			title
			area
			country
			city
			userName
			rating
			fileIdentifier
			imageUrl
			updatedAt
		}
	}
`;

type Data = {
	topPostsByArea: Post[];
};

type Vars = {
	area: AreaEnum;
};

export const useAreaTopPosts = (vars: Vars) =>
	useQuery<Data, Vars>(AREA_TOP_POSTS, { variables: vars });
