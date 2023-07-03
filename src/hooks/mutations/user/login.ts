import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { User } from '@/types/authTypes';

export const mutation = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			email
			username
		}
	}
`;

type Data = {
	login: User;
};

type Vars = {
	email: string;
	password: string;
};

export const useLogin = () => useMutation<Data, Vars>(mutation);
