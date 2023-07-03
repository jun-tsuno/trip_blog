import { mergeTypeDefs } from '@graphql-tools/merge';
import userTypeDefs from './userTypeDefs';
import postTypeDefs from './postTypeDefs';

const typeDefs = mergeTypeDefs([userTypeDefs, postTypeDefs]);

export default typeDefs;
