import React from "react";
import courseContent from "./courseContent";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ReferencBooks from "../components/ReferencBooks";

const ReferenceBookList = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}
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
      </Box>
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
ReferenceBookList.layout = courseContent;
export default ReferenceBookList;
