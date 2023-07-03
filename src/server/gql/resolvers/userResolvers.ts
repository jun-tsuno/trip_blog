import User from '@/server/db/models/userModel';
import bcrypt from 'bcrypt';

const getUser = async (parent: undefined, args: { userId: string }) => {
	const user = await User.findById(args.userId);
	return user;
};

const getUsers = async (parent: undefined, args: {}) => {
	const users = await User.find({});
	return users;
};

const signup = async (
	parent: undefined,
	args: { username: string; email: string; password: string }
) => {
	const { username, email, password } = args;

	const isUserExist = await User.findOne({ email });
	if (isUserExist) return new Error('User already exist');

	const salt = await bcrypt.genSalt();
	const passwordHash = await bcrypt.hash(password, salt);
	const user = await User.create({ username, email, password: passwordHash });

	return user ? true : false;
};

const login = async (
	parent: undefined,
	args: { email: string; password: string }
) => {
	const { email, password } = args;
	const user = await User.findOne({ email });
	if (!user) throw new Error('User not found');

	const matchedPassword = await bcrypt.compare(password, user.password);
	if (!matchedPassword) throw new Error('Invalid credentials');

	return user;
};

export { getUser, getUsers, signup, login };
