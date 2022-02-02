import SidebarMenu from "./SidebarMenu";
// import Syllabus from "../pages/Syllabus";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AppBar, Container, Typography } from "@mui/material";
import { RiFilePaper2Fill } from "react-icons/ri";
import { GiBookshelf, GiNotebook } from "react-icons/gi";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
// import { GrSystem } from "react-icons/gr";
// import * as GrIcons from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { makeStyles, styled } from "@mui/styles";
import { useTheme, ThemeProvider } from "@mui/material/styles";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter()
  const theme = useTheme();
  const useStyles = makeStyles({
    container: {
      paddingTop:0 ,
      backgroundColor: "#060b26",
      height: "100vh",
      border: "1px solid gray",
      overflow: 'hidden',
      // position:'relative',
      position: 'fixed',
      // top: 64px,
      // left:0,
      // right:74%;
      // width:'inherit',
      // [theme.breakpoints.down("lg")]: {
      //   width:'80px',
      // },
    },
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      cursor: "pointer",
      color: "white",
      padding:12,
      fontSize:12,
      marginLeft:-10,
      borderRadius: 16,
      '&:hover': {
        background: "#1a83ff",
      }
    },
    active:{
      background: "#1a83ff",
      borderRadius: 16,
      // marginTop: 25
      // padding:-20
    },
    text: {
      fontWeight: 400,
      fontSize:15,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      // [theme.breakpoints.down("md")]: {
      //   fontSize: 12,
      // },
    },
    icon: {
      marginRight: theme.spacing(1),
      // stroke:"rgb(211, 211, 211) !important",
      // [theme.breakpoints.down("md")]: {
        // }
      fontSize: 18,
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.container}>
      <Link href="/SyllabusForm" >
          
          <div className={classes.item}>
            <RiFilePaper2Fill className={classes.icon} />
            <Typography className={classes.text}>StudyMate</Typography>
          
        </div>
      </Link>
        {/* <li className={router.pathname == "/Syllabus" ? classes.active : ""}> */}
        <Link href="/Syllabus" >
          
            <div className={router.pathname == "/Syllabus" ? `${classes.active} ${classes.item}` : classes.item}>
              <RiFilePaper2Fill className={classes.icon} />
              <Typography className={classes.text}>Syllabus</Typography>
            
          </div>
        </Link>
        {/* </li> */}
        {/* <Link to='/syllabus' className={classes.item}> */}
        {/* </Link> */}
        {/* <li className={router.pathname == "/referenceBookList" ? classes.active : ""}> */}
        <Link href="/referenceBookList">
            <div className={router.pathname == "/referenceBookList" ? `${classes.active} ${classes.item}` : classes.item}>
              <GiBookshelf className={classes.icon} />
              <Typography className={classes.text}>Books</Typography>
            </div>
        </Link>
        {/* </li> */}
        <div>
          <div className={classes.item}>
            <MdOutlineMenuBook className={classes.icon} />
            <Typography className={classes.text}>notes</Typography>
          </div>
        </div>
        <div>
          <div className={classes.item}>
            <FaClipboardList className={classes.icon} />
            <Typography className={classes.text}>Mcq</Typography>
          </div>
        </div>
        <div>
          <div className={classes.item}>
            <GiNotebook className={classes.icon} />
            <Typography className={classes.text}>Manual</Typography>
          </div>
        </div>
        <div>
          <div className={classes.item}>
            <FaLaptopCode className={classes.icon} />
            <Typography className={classes.text}>Software</Typography>
          </div>
        </div>
      </Container>
     </ThemeProvider>
  );
};

export default Sidebar;
