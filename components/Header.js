import { AcademicCapIcon } from "@heroicons/react/solid";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { FaGraduationCap } from "react-icons/fa";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar className='bg-white' position="fixed" >
      <Toolbar className="flex justify-between text-black">
        <div className="flex items-center">
          <FaGraduationCap className="text-2xl mr-3"/>
          <Typography className="font-sans" variant="h6">StudyMate</Typography>
        </div>
        
        <Box sx={{  display: { sm: 'flex',xs: 'none' } }}>
        <Typography sx={{ minWidth: 100 }}>Blog</Typography>
        <Typography sx={{ minWidth: 100 }}>Courses</Typography>
        <Typography sx={{ minWidth: 100 }}>Admin</Typography>
        </Box>
        <Box sx={{  display: { xs: 'flex',sm: 'none' } }}>
        <Button
        id="long-button"
        aria-label="more"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="bg-black"
      >
        <MenuOpenIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        open={Boolean(anchorEl)}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Box>
      </Toolbar>
    </AppBar>
    
    // {/* <div className='max-w-full text-center'>
    // <Image src = 'https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/06/Computer-Sience-Specializations-HERO.jpg' height={550} width={1200} className='w-screen max-h-85'/>
    // <Image src = 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' height={550} width={1200} className='mx-20'/>
    // <Image src = 'https://www.codingdojo.com/blog/wp-content/uploads/The-7-Most-In-Demand-Programming-Languages-of-2019-Header.png' height={550} width={1200} className='mx-20'/>

    // </div> */}
    // </header>
  );
};

export default Header;
