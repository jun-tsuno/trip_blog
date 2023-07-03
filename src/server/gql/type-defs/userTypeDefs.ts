import { gql } from 'graphql-tag';

const userTypeDefs = gql`
	type User {
		id: ID!
		username: String
		email: String
		password: String
	}

	type Query {
		getUser(userId: ID!): User
		getUsers: [User!]
	}

	type Mutation {
		signup(username: String!, email: String!, password: String!): Boolean
		login(email: String!, password: String!): User
	}
`;

export default userTypeDefs;
