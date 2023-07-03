import { getUser, getUsers, signup, login } from './userResolvers';
import {
	getPosts,
	getPost,
	getAllPostsByArea,
	topPostsByArea,
	createPost,
	editPost,
	deletePost,
} from './postResolvers';

const resolvers = {
	Query: {
		getUser,
		getPost,
		getUsers,
		getPosts,
		getAllPostsByArea,
		topPostsByArea,
	},
	Mutation: {
		signup,
		login,
		createPost,
		editPost,
		deletePost,
	},
};

export default resolvers;
