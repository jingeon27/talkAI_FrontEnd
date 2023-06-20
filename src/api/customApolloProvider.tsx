import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
  concat,
} from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { ReactNode } from "react";
import { getAccessToken } from "../util/storage/getAccessToken";
const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}graphql`,
  credentials: "same-origin",
});
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getAccessToken();
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : document.cookie,
    },
  });
  return forward(operation);
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
        : concat(authMiddleware, httpLink),
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
