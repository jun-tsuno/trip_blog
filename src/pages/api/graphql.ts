import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import resolvers from '@/server/gql/resolvers';
import typeDefs from '@/server/gql/type-defs';
import connectDB from '@/server/db/config';

connectDB();

const server = new ApolloServer({
	resolvers,
	typeDefs,
});

export default startServerAndCreateNextHandler(server);
