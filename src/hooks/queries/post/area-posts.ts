import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { AreaEnum, Post } from '@/types/postTypes';

export const AREA_POSTS = gql`
	query getPostsByArea($area: Area!) {
		getAllPostsByArea(area: $area) {
			_id
			title
			area
			country
			city
			description
			rating
			userName
			imageUrl
			fileIdentifier
		}
	}
`;

type Data = {
	getAllPostsByArea: Post[];
};

type Vars = {
	area: AreaEnum;
};

export const useAreaPosts = (vars: Vars) =>
	useQuery<Data, Vars>(AREA_POSTS, { variables: vars });
