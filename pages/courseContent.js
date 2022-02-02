import { Grid } from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import Syllabus from "./Syllabus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import TabPanel from "./TabPanel";

const courseContent = ({ children }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    position:'relative'
  }));
  return (
    <div className="">
      {/* <Router> */}
      
      {/* <Switch>
          <Route path="/syllabus" component={Syllabus} /> */}
      {/* <Route path="/products" component={Products} /> */}
      {/* </Switch> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          // justifyContent="space-between"
          // spacing={{ xs: 2, md: 3 }} columns={{ xs: 5, sm: 8, md: 12 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid item  md={2} sm={1.7} xs={1} >
            <Item>
              {/* item1 */}
              <Sidebar />
            </Item>
          </Grid>
          <Grid item md={10} sm={6.3} xs={5}  >
            <Item>
              {children}
              </Item>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>
        
      <Grid item xs={2.3}>
            <Item>
              <Sidebar />
            </Item>
          </Grid>
          <Grid item xs={9.7} >
            <Item>{children}</Item>
          </Grid>
        
      </Grid>
    </Box> */}
      
      {/* <Grid container>
          <Grid item sm={2} className="pr-15">
            <Sidebar />
          </Grid>
          <Grid item sm={9} className='pt-20 '>
            {children}
          </Grid>
        </Grid> */}
      {/* <div>

           <Sidebar/> 
            </div>
            <div >

           <Syllabus/>
            </div> */}
      {/* </Router> */}
    </div>
  );
};

export default courseContent;
