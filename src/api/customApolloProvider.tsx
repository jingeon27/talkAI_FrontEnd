import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { ReactNode } from "react";
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});
const makeClient = () =>
  new ApolloClient({
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
    cache: new NextSSRInMemoryCache(),
  });
const makeSuspenseCache = () => {
  return new SuspenseCache();
};
export const CustomApolloProvider = ({ children }: { children: ReactNode }) => (
  <ApolloNextAppProvider {...{ makeClient, makeSuspenseCache }}>
    {children}
  </ApolloNextAppProvider>
);
