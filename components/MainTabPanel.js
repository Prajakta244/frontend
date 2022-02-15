import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
// import TabPanel from '@mui/lab/TabPanel';
// import courseContent from './courseContent';
// import Syllabus from './Syllabus'
import { useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const years = Array.from(new Array(20), (val, index) => index + 2010);
const MainTabPanel = ({ children }) => {
  const [selectedTab, setselectedTab] = useState(0);
  const [value, setValue] = useState("1");
  

  const [year, setYear] = useState(2016);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab className="mx-auto" label="BSC" value="1" />
              <Tab className="mx-auto" label="MSC" value="2" />
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 120 }}
              ></FormControl>
            </TabList>
          </Box>
          {children}
          
        </TabContext>
      </Box>
    </div>
  );
};
// TabPanel.layout = courseContent
export default MainTabPanel;
{
  /* <Box sx={{ backgroundColor: 'white', width: '100%' }}>
      {/* <AppBar position="static" sx={{backgroundColor: '#060b26'}}> */
}
// <Tabs
//   value={selectedTab}
//   onChange={handleChange}
//   indicatorColor="secondary"
//   textColor="inherit"
//   variant="fullWidth"
//   aria-label="full width tabs example"
// >
//   <Tab label="First year" />
//   <Tab label="Second year" />
//   <Tab label="Third year" />
// </Tabs>
{
  /* </AppBar> */
}
{
  /* {selectedTab === 0 && `${<firstyear/>}`} */
}
// </Box> }
