import "../styles/globals.css";
import "./../components/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import TabPane from "./TabPanel1";
import courseContent from "./courseContent";
const layouts = {
  L1: courseContent,
  L2: TabPane,
};

// const theme = {};
function MyApp({ Component, pageProps, ...appProps }) {
  const Layout = layouts[Component.layout] || DefaultLayout;
  // console.log(appProps.router.pathname)
  if ([`/`].includes(appProps.router.pathname)) {
    return <Component {...pageProps} />;
  } else {
    return (
      <Layout>
        <TabPane>
          <Component {...pageProps} />
        </TabPane>
      </Layout>
    );
  }
}

export default MyApp;
