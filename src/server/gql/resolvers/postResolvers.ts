import Post from '@/server/db/models/postModel';
import User from '@/server/db/models/userModel';
import mongoose from 'mongoose';
import { CreatePostInput, EditPostInput, AreaEnum } from '@/types/postTypes';
import { deleteFile, getObjectSignedUrl } from '@/server/db/config/s3';

const getPosts = async (parent: undefined, args: {}) => {
	return Post.find({});
};

const getPost = async (parent: undefined, args: { postId: string }) => {
	try {
		const post = await Post.findById(args.postId);
		if (post.fileIdentifier) {
			post.imageUrl = await getObjectSignedUrl(post.fileIdentifier);
		}

		return post;
	} catch (error) {
		console.log(error);
	}
};

const getAllPostsByArea = async (
	parent: undefined,
	args: { area: AreaEnum }
) => {
	try {
		const posts = await Post.find({ area: args.area });

		for (const post of posts) {
			if (post.fileIdentifier) {
				post.imageUrl = await getObjectSignedUrl(post.fileIdentifier);
			}
		}

		return posts;
	} catch (error) {
		console.log(error);
	}
};

const topPostsByArea = async (parent: undefined, args: { area: AreaEnum }) => {
	const maxToShow = 3;

	try {
		const postsByRateAndDate = await Post.find({ area: args.area }).sort({
			rating: -1,
			updatedAt: -1,
		});

		const postsToShow = postsByRateAndDate.slice(0, maxToShow);

		for (const post of postsToShow) {
			if (post.fileIdentifier) {
				post.imageUrl = await getObjectSignedUrl(post.fileIdentifier);
			}
		}
		return postsToShow;
	} catch (error) {
		console.log(error);
	}
};

const createPost = async (
	parent: undefined,
	args: { input: CreatePostInput }
) => {
	const userId = args.input.postedUser;
	const postedUser = await User.findById(userId);

	const post = await Post.create({
		...args.input,
		userName: postedUser.username,
	});

	return post;
};

const editPost = async (parent: undefined, args: { input: EditPostInput }) => {
	const { _id, title, description, area, country, city, rating } = args.input;
	if (!mongoose.Types.ObjectId.isValid(_id)) return new Error('No such post');
	const post = await Post.findOneAndUpdate(
		{ _id: _id },
		{ $set: { title, description, area, country, city, rating } },
		{ new: true }
	);
	return post;
};

const deletePost = async (
	parent: undefined,
	args: { id: string; fileIdentifier: string | undefined }
) => {
	if (!mongoose.Types.ObjectId.isValid(args.id))
		return new Error('No such post');

	const post = await Post.findOneAndDelete({ _id: args.id });

	if (args.fileIdentifier) {
		await deleteFile(args.fileIdentifier);
	}

	if (!post) return new Error('No such post');
	return post;
};

export {
	getPosts,
	getPost,
	getAllPostsByArea,
	topPostsByArea,
	createPost,
	editPost,
	deletePost,
};
