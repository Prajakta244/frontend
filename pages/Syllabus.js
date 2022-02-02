import React, { useState } from "react";

// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import { Container } from "@mui/material";
import courseContent from "./courseContent";
import { makeStyles, styled } from "@mui/styles";
import { useTheme, ThemeProvider } from "@mui/material/styles";
// import TabPanel from "./TabPanel1";
import TabPane from "./TabPanel1";
import TabPanel from '@mui/lab/TabPanel';

export const Syllabus = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    container: {
      paddingTop: "80px",
      [theme.breakpoints.down("md")]: {
        width: "500px",
      },
    },
    view: {
      width: "500px",
      [theme.breakpoints.down("md")]: {
        width: "400px",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      cursor: "pointer",
      color: "white",
    },
    text: {
      fontWeight: 500,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      // [theme.breakpoints.down("lg")]: {
      //   fontSize: 12,
      // },
    },
    icon: {
      marginRight: theme.spacing(1),
      stroke: "rgb(211, 211, 211) !important",
    },
  });
  const classes = useStyles();
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <TabPanel value="1"><Container className={classes.container}>
        <div className={"pdf-container"}>
          {/* show pdf conditionally (if we have one)  */}
          {
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  className={classes.view}
                  fileUrl="/assets/docs/F.-Y.-B.Sc-Computer-Scienc 2016 -2020.pdf"
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          }

          {/* if we dont have pdf or viewPdf state is null */}
        </div>
      </Container></TabPanel>
      <TabPanel value="2"><Container className={classes.container}>
        <div className={"pdf-container"}>
          {/* show pdf conditionally (if we have one)  */}
          {
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  className={classes.view}
                  fileUrl="/assets/docs/F.-Y.-B.Sc-Computer-Scienc 2016 -2020.pdf"
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          }

          {/* if we dont have pdf or viewPdf state is null */}
        </div>
      </Container></TabPanel>
      <TabPanel value="3"><Container className={classes.container}>
        <div className={"pdf-container"}>
          {/* show pdf conditionally (if we have one)  */}
          {
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  className={classes.view}
                  fileUrl="/assets/docs/F.-Y.-B.Sc-Computer-Scienc 2016 -2020.pdf"
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          }

          {/* if we dont have pdf or viewPdf state is null */}
        </div>
      </Container></TabPanel>
      {/* <TabPanel firstyear='Syllabus'/> */}
      {/* {selectedTab === 0 &&  */}
      
    </div>
  );
};
Syllabus.layout = 'L1';
export default Syllabus;
