import React, { useEffect, useState } from "react";
import courseContent from "./courseContent";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReferencBooks from "../components/ReferencBooks";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { maxHeight } from "@mui/system";
import TabPanel from "@mui/lab/TabPanel";
import SubTabPanel from "../components/SubTabPanel";

const ReferenceBookList = () => {
  const [bookList, setBookList] = useState([]);
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflowX:'scroll',
    overflowY:'hidden'
  }));
  const useStyles = makeStyles({
    row:{
      color: 'black',
      marginLeft:20,
      
  },
  row_posters:{
    display:'flex',
    overflowY:'hidden',
    overflowX:'scroll',
    padding:20,
    '&::-webkit-scrollbar':{
      display:'none'
    },
    marginInline:20,
    
  },
  row_poster:{
    objectFit:'contain',
    // width:'100%',
    // maxHeight:100,
    marginRight:10,
    border:'1px solid black'
  //   transition:'transfrom 450ms',
  //   '&:hover': {
  //     transform:'scale(1.5, 1.5)'
  // }
    // object-fit: contain;
    // width: 100%;
    // max-height: 100px;
    // margin-right: 10px;
    // transition: transfrom 450ms;
},
text: {
  fontWeight: 400,
  fontSize:30,
  
  // [theme.breakpoints.down("md")]: {
  //   fontSize: 12,
  // },
}
  });
  const classes = useStyles();
  
  useEffect(async()=>{
    try{
      
      const request = await axios.get(
        `http://127.0.0.1:8000/reference_book/`
      );
      setBookList(request.data);
      console.log('request...',request);
    } catch(error){
      console.log('err',error)
    }
       
  },[bookList])
  const getBooks = (semNum)=>{return bookList.filter(book => book.year === 'fy' && book.degree === 'bachelor' && book.semester === `semester${semNum}`)} 
  
  // console.log(bookList)
  return (
    <div>
      {/* <MainTabPanel/> */}
      <SubTabPanel>
      <TabPanel value="fy">
        {Array.from(new Array(6), (val, index) => index+1 ).map((i)=>
          (<div>

            <Typography className={classes.text}>{`Semester${i}`}</Typography>
        <div className={classes.row}>
        <div className={classes.row_posters}>
          {/* {JSON.stringify(getBooks({'year':'fy','degree':'bachelor','semester':'semester1'}))} */}
          {/* {Array.from(new Array(6), (val, index) => index+1 ).map((i)=> */}
           { getBooks(i).map(book => (<ReferencBooks book={book}/>))}
          {/* // )} */}
          {/* {} */}
          </div>
          </div>
          </div>
          )
        )}
        {/* <Typography className={classes.text}>Semester1</Typography>
        <div className={classes.row}>
        <div className={classes.row_posters}>
          {/* {JSON.stringify(getBooks({'year':'fy','degree':'bachelor','semester':'semester1'}))} */}
          {/* {Array.from(new Array(6), (val, index) => index+1 ).map((i)=> */}
           {/* { getBooks(i).map(book => (<ReferencBooks book={book}/>))} */}
          {/* // )} */}
          {/* {} */}
          {/* </div> */}
          {/* </div> */} 
          {/* <div className={classes.row}>
        <div className={classes.row_posters}>
          {bookList.map(book => (<ReferencBooks book={book}/>))}
          </div>
          </div> */}
        {/* <div className={classes.row}>
            <div className={classes.row_posters}> */}
              {/* <div className={classes.row_poster}> */}

                {/* {bookList.map(book => (<ReferencBooks book={book}/>))} */}
              {/* </div> */}
            {/* </div>
            
        </div> */}
        </TabPanel>
        <TabPanel value="sy"><div className={classes.row}>
            <div className={classes.row_posters}>
              {/* <div className={classes.row_poster}> */}

                {bookList.map(book => (<ReferencBooks book={book}/>))}
              {/* </div> */}
            </div>
            
        </div></TabPanel>
        <TabPanel value="ty"><div className={classes.row}>
            <div className={classes.row_posters}>
              {/* <div className={classes.row_poster}> */}

                {bookList.map(book => (<ReferencBooks book={book}/>))}
              {/* </div> */}
            </div>
            
        </div></TabPanel>
        </SubTabPanel>
      {/* <div className={classes.row}>
            <div className={classes.row_posters}>
              {/* <div className={classes.row_poster}> */}

                {/* {bookList.map(book => (<ReferencBooks book={book}/>))} */}
              {/* </div> */}
            {/* </div>  */}
            
        {/* </div> */}
        {/* <div className={classes.row}> */}
            {/* <div className={classes.row_posters}> */}
            {/* <div className={classes.row_poster}> */}
                {/* {bookList.map(movie => (<ReferencBooks/>))} */}
                {/* </div> */}
            {/* </div> */}
            
        {/* </div> */}
      {/* <Box style={{overflow: 'auto'}}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={1} 
          overflowX='scroll'
          overflowY='hidden'
        >
          <Grid item xs={3.7} >
            <Item>
              <ReferencBooks/>
            </Item>
          </Grid>
          <Grid item xs={3.7} >
            <Item><ReferencBooks/></Item>
          </Grid>
          <Grid item xs={3.7}>
            <Item>
              <ReferencBooks/>
            </Item>
          </Grid>
          <Grid item xs={3.7} >
            <Item><ReferencBooks/></Item>
          </Grid>
        </Grid>
      </Box> */}
      {/* <Grid container spacing={2} className="flex">
        <Grid item xs={4}>
          <ReferencBooks/>
        </Grid>
        <Grid item xs={4}>
          <ReferencBooks/>
        </Grid>
        <Grid item xs={4}>
          <ReferencBooks/>
        </Grid>
        <Grid item xs={4}>
          <ReferencBooks/>
        </Grid>
        <Grid item xs={4}>
          <ReferencBooks/>
        </Grid>
        <Grid item xs={4}>
          <ReferencBooks/>
        </Grid>
      </Grid> */}
    </div>
  );
};
ReferenceBookList.layout = "L1";
export default ReferenceBookList;
