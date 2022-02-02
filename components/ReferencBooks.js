import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import courseContent from "../pages/courseContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import '../components/ReferencBooks.css'

const ReferencBooks = () => {
  const style = {
    position: 'absolute',
    top: '165%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 500,
    // height:800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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

  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <div>
          <Document
            file="/assets/docs/F.-Y.-B.Sc-Computer-Scienc 2016 -2020.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page width={250} pageNumber={pageNumber} />
          </Document>
        </div>
        <CardContent className="-mt-5">
          <Typography gutterBottom variant="h5" component="div">
            Book1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subject one
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen} >Preview</Button>
          <Button size="small">Download</Button>
        </CardActions>
      </Card>
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
        style={{ overflow: 'scroll' }}
      >
        <div style={{
zIndex: 10,
padding:10
}}>
        <Fade in={open}>
          <Box sx={style}>
            {[1,2].map((i)=>(
              <Document
              file="/assets/docs/F.-Y.-B.Sc-Computer-Scienc 2016 -2020.pdf"
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
ReferencBooks.layout = courseContent;
export default ReferencBooks;
