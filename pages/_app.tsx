import { AppProps } from "next/app";
import Layout from "../src/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollosetting";

import "antd/dist/antd.css";
// import { accessTokenState } from "../src/commons/store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
