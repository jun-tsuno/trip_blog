import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { User } from '@/types/authTypes';

export const query = gql`
	query getUser($userId: ID!) {
		getUser(userId: $userId) {
			username
		}
	}
`;

type Data = {
	getUser: Pick<User, 'username'>;
};

type Vars = {
	userId: string;
};

export const useUser = (vars: Vars) =>
	useQuery<Data, Vars>(query, { variables: vars });
