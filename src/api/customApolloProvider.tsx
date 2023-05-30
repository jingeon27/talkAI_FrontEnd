import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});
export const CustomApolloProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <ApolloProvider {...{ client }}>{children}</ApolloProvider>;
