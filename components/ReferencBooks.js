import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import courseContent from "../pages/courseContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TabPanel from "@mui/lab/TabPanel";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
// import Typography from '@mui/material/Typography';
// import '../components/ReferencBooks.css'
import MainTabPanel from "./MainTabPanel";


const ReferencBooks = ({ book }) => {
  const style = {
    position: "absolute",
    top: "165%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 500,
    // height:800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const useStyles = makeStyles({
    cardcontainer: {
      // width:600,
      overflow: "hidden",
      paddingLeft:20,
      marginInline: 10,
      // borderRight
      borderRight:'0.3px solid gray'
    },
    pdfcontainer: {
      overflow: "hidden",
      height:'100%',
      paddingLeft:25,
      width:230
    },
    content: {
      marginInline:25,
      // paddingTop:20
    },
    text: {
      fontWeight: 500,
      fontSize: 20,
      color: "black",

      // [theme.breakpoints.down("md")]: {
      //   fontSize: 12,
      // },
      
    },
    hr: {
      borderLeft:'5px solid black',
      width:25,
      height:500,
      position:'absolute'
  }
  });

  const classes = useStyles();

  return (
    <div>
      <Box
      sx={{
        width: 300,
        height: 300,
        // backgroundColor: 'gray',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
        alignItems:'center'
      }}
    >
      <div className={classes.cardcontainer}>
        <div className={classes.pdfcontainer}>
          <Document
            file={book["filepath"]}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page className='self-center' height={250} pageNumber={pageNumber} />
          </Document>
        </div>
        
        <div className={classes.content}>
          <Typography className={classes.text}>{book["subject"]}</Typography>
          <hr/>
          <Button size="small" onClick={handleOpen}>
            Preview
          </Button>
          <a
            href={book["filepath"]}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button size="small">
              {/* <i className="fas fa-download" /> */}
              Download File
            </Button>
          </a>
        </div>
        {/* <div className={classes.hr}></div> */}
      </div>
      </Box>
      {/* <hr /> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "scroll" }}
      >
        <div
          style={{
            zIndex: 10,
            padding: 10,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              {[1, 2].map((i) => (
                <Document
                  file={book["filepath"]}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page width={700} pageNumber={i} />
                </Document>
              ))}
            </Box>
          </Fade>
        </div>
      </Modal>
      
    </div>
  );
};
ReferencBooks.layout = "L1";
export default ReferencBooks;
