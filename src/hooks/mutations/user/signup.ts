import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

export const mutation = gql`
	mutation signup($username: String!, $email: String!, $password: String!) {
		signup(username: $username, email: $email, password: $password)
	}
`;

type Data = {
	signup: boolean;
};

type Vars = {
	username: string;
	email: string;
	password: string;
};

export const useSignup = () => useMutation<Data, Vars>(mutation);
