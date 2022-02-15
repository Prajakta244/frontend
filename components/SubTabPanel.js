import { useState } from "react";
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/system';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { FormControl, Tab } from '@mui/material';
import MainTabPanel from './MainTabPanel';


const SubTabPanel = ({children}) => {
    const [value2, setValue2] = useState("1");
    const [value, setValue] = useState("1");
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
      };
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return <div>
      <MainTabPanel>
      <TabPanel value="1">
            <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value2}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange2} aria-label="lab API tabs example">
              <Tab className="mx-auto" label="First year" value="fy" />
              <Tab className="mx-auto" label="Second year" value="sy" />
              <Tab className="mx-auto" label="Third year" value="ty" />
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 120 }}
                ></FormControl>
            </TabList>
          </Box>
                {children}
          
          
        </TabContext>
      </Box> 
      </TabPanel> 
         <TabPanel value="2">
          <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab className="mx-auto" label="First year" value="bscfy" />
              <Tab className="mx-auto" label="Second year" value="bscsy" />
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 120 }}
              ></FormControl>
            </TabList>
          </Box>
          {/* {children} */}
          {/* <TabPanel value="1">Item One</TabPanel> */}
        {/* <TabPanel value="2">Item Two</TabPanel> */}
        {/* <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
      </Box>
      </TabPanel> 
      </MainTabPanel>
  </div>;
};

export default SubTabPanel;
