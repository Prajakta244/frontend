import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import courseContent from './courseContent';
// import Syllabus from './Syllabus'
import { useState } from 'react';

const TabPane = ({children}) => {
    const [selectedTab, setselectedTab] = useState(0);
    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChange = (event, newValue) => {
  //   setselectedTab(newValue);
  // };
  return <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab className='mr-12' label="First year" value="1" />
            <Tab label="Second year" value="2" />
            <Tab label="Third year" value="3" />
          </TabList>
        </Box>
        {children}
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  </div>;
};
// TabPanel.layout = courseContent
export default TabPane;
{/* <Box sx={{ backgroundColor: 'white', width: '100%' }}>
      {/* <AppBar position="static" sx={{backgroundColor: '#060b26'}}> */}
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
      {/* </AppBar> */}
        {/* {selectedTab === 0 && `${<firstyear/>}`} */}
      // </Box> }
