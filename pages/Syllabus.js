import React, { useEffect, useState } from "react";
import axios from "axios";
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
// import TabPanel from "./MainTabPanel";
import SearchBar from "../components/SearchBar";

const years = Array.from(new Array(20), (val, index) => index + 2010);

export const Syllabus = () => {
  const [syllabus, setsyllabus] = useState({});
  const [searchData,setSearchData] = useState({degree: 'bachelor', course: 'cs', syllabus_year: '2022', year: 'fy'})
  
  useEffect(async()=>{
    try{
      const request = await axios.post(
        `http://127.0.0.1:8000/syllabus/filter_syllabus`,searchData,{headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }},{
          validateStatus: function (status) {
            console.log(`status`,status)
            return status < 500; // Resolve only if the status code is less than 500
          }}
      );
      setsyllabus(request.data);
      console.log('request...',request);
    } catch(error){
      console.log('err',error.response)
    }
       
  },[searchData])
  const filepath = syllabus?.filepath
  console.log('filepath....',filepath)
  // const getSyllabus  =async (searchData) => {
  //   // setYear(event.target.value);
  //   const request = await axios.post(
  //     `http://127.0.0.1:8000/syllabus/filter_syllabus`,searchData,{headers: {
  //       // Overwrite Axios's automatically set Content-Type
  //       'Content-Type': 'application/json'
  //     }}
  //   );
  //   setsyllabus(request.data);
  //   console.log('request...',request);
  // }
  // getSyllabus()
  // console.log('syllabus...',syllabus);
  const theme = useTheme();
  const useStyles = makeStyles({
    container: {
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
      {/* <div>{JSON.stringify(searchData)}</div> */}
      {/* {console.log(syllabus)} */}
      {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={year}
          onChange={handleChange}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      {/* <TabPanel value="1" onClick={()=>{return setSelectedTab('1')}}> */}
      <SearchBar updateSerachData={setSearchData}/>
        <Container className={classes.container}>
          <div className={"pdf-container"}>
            {/* show pdf conditionally (if we have one)  */}
            { filepath &&
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer
                    className={classes.view}
                    fileUrl={filepath}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </>
            }

            {/* if we dont have pdf or viewPdf state is null */}
          </div>
        </Container>
      {/* </TabPanel> */}
      {/* <TabPanel value="2">
        <Container className={classes.container}>
          <div className={"pdf-container"}> */}
            {/* show pdf conditionally (if we have one)  */}
            {/* {
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer
                    className={classes.view}
                    fileUrl="/assets/docs/F.-Y.-B.Sc-Computer-Scienc 2016 -2020.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </>
            } */}

            {/* if we dont have pdf or viewPdf state is null */}
          {/* </div>
        </Container>
      </TabPanel>
      <TabPanel value="3">
        <Container className={classes.container}>
          <div className={"pdf-container"}> */}
            {/* show pdf conditionally (if we have one)  */}
            {/* {
              <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer
                    className={classes.view}
                    fileUrl="/assets/docs/F.-Y.-B.Sc-Computer-Scienc 2016 -2020.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </>
            } */}

            {/* if we dont have pdf or viewPdf state is null */}
          {/* </div>
        </Container>
      </TabPanel> */}
      {/* <TabPanel firstyear='Syllabus'/> */}
      {/* {selectedTab === 0 &&  */}
    </div>
  );
};
Syllabus.layout = "L1";
export default Syllabus;
