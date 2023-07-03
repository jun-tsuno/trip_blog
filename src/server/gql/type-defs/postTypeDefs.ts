import { gql } from 'graphql-tag';

const postTypeDefs = gql`
	scalar Date

	enum Area {
		NORTH_AMERICA
		SOUTH_AMERICA
		ASIA
		OCEANIA
		EUROPE
		AFRICA
		OTHER
	}

	type Post {
		_id: ID!
		title: String!
		description: String!
		area: Area!
		country: String!
		city: String!
		rating: Int
		postedUser: String!
		userName: String
		fileIdentifier: String
		imageUrl: String
		createdAt: Date
		updatedAt: Date
	}

	input CreatePostInput {
		title: String!
		description: String
		country: String!
		city: String!
		rating: Int!
		area: Area!
		postedUser: String!
		fileIdentifier: String
	}

	input EditPostInput {
		_id: ID!
		title: String
		description: String
		country: String
		city: String
		rating: Int
		area: Area
	}

	type Query {
		getPosts: [Post]
		getPost(postId: ID!): Post
		getAllPostsByArea(area: Area!): [Post]
		topPostsByArea(area: Area!): [Post]
	}

	type Mutation {
		createPost(input: CreatePostInput!): Post
		editPost(input: EditPostInput!): Post
		deletePost(id: String!, fileIdentifier: String): Post
	}
`;

export default postTypeDefs;
