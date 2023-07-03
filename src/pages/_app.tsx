import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { store } from '@/redux/store';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				topPostsByArea: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				getAllPostsByArea: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

export const client = new ApolloClient({
	uri: '/api/graphql',
	cache: cache,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ApolloProvider>
	);
}
