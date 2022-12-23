import "../styles/globals.css";
import "antd/dist/reset.css";
import { AuthProvider, getUser, AuthTypes } from "../context/authProvider";
import Layout from "../components/layout";
import { NextPage, } from "next";
import App, { AppProps, AppContext } from "next/app";

interface PropeTypes extends AppProps {
  auth: AuthTypes;
}

const MyApp: NextPage<PropeTypes> = ({ Component, pageProps, auth }) => {
  return (
    <AuthProvider myAuth={auth}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext as unknown as AppContext);
  const auth = await getUser(appContext);
  return { ...appProps, auth } as PropeTypes;
};

export default MyApp
