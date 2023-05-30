import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});
export const CustomApolloProvider = ({ children }: { children: ReactNode }) => (
  <ApolloProvider {...{ client }}>{children}</ApolloProvider>
);
