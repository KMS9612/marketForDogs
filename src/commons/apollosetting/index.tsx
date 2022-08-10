import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadState } from "../store";
import { onError } from "@apollo/client/link/error";

import { getAccessToken } from "../lib/getAccessToken";

interface IProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isloaded, setIsloaded] = useRecoilState(isLoadState);
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
      setIsloaded(true);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
          });
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend07.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
