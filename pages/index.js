import Head from "next/head";
import Image from "next/image";
// import Syllabus from '../components/Syllabus'
import Header from "../components/Header";
import Banner from "../components/Banner";
import Courses from "../components/Courses";
// import Syllabus from "./Syllabus";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import about from "./about";

const theme = {};
export default function Home() {
  return (
    // <Router>
      <ThemeProvider theme={theme}>
        <Container>
          {/* <Header /> */}
          <main className="lg:flex flex-col max-w-screen-2xl mx-auto bg-gray-100">
            <Banner />
            {/* <Switch>
              <Route path='/about' component={about} />
            </Switch> */}
            <h1 className="text-center text-5xl font-bold font-serif">
              Our Courses
            </h1>
            <Courses />
          </main>
          {/* <Syllabus/> */}
        </Container>
      </ThemeProvider>
    //  </Router>
  );
}
