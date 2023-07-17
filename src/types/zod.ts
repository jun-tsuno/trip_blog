import * as z from 'zod';
import { ERROR_MESSAGE } from '@/helpers/constants';

// type for create post form
export const createPostSchema = z.object({
	title: z.string().min(1, { message: ERROR_MESSAGE.REQUIRED }),
	country: z.string().min(1, { message: ERROR_MESSAGE.REQUIRED }),
	city: z.string().min(1, { message: ERROR_MESSAGE.REQUIRED }),
	rating: z
		.number({ invalid_type_error: 'Only a Number is allowed' })
		.min(0)
		.max(5, { message: ERROR_MESSAGE.REQUIRED }),
	description: z.string().max(300),
});

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;

// type for login form
export const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z
		.string()
		.min(1, { message: 'Password should be 1~20 characters' })
		.max(20),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

// type for signup form
export const signupSchema = z.object({
	username: z.string().min(1),
	email: z.string().email('Invalid email address'),
	password: z
		.string()
		.min(1, { message: 'Password should be 1~30 characters' })
		.max(20),
});

export type SignupSchemaType = z.infer<typeof signupSchema>;
