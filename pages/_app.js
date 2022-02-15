import "../styles/globals.css";
import "./../components/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
// import MainTabPanel from "../components/MainTabPanel";
import courseContent from "./courseContent";
const layouts = {
  L1: courseContent,
  
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
        {/* <MainTabPanel> */}
          <Component {...pageProps} />
        {/* </MainTabPanel> */}
      </Layout>
    );
  }
}

export default MyApp;
