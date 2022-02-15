import { Button, Grid, MenuItem, Typography } from "@mui/material";
import { Field, Formik } from "formik";
import { TextField } from "formik-mui";
import React, { useState } from "react";
import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/system";

const year = 2010;
const years = Array.from(new Array(20), (val, index) => index + year);
const SearchBar = ({updateSerachData}) => {
    const [syllabusHeader,setSyllabusHeader] = useState('')
    const submitFunc = (data) => {
        setTimeout(() => {
            // setSubmitting(false);
            // alert(JSON.stringify(data, null, 2));
            setSyllabusHeader(`${data.year.toUpperCase()}-${data.degree[0].toUpperCase()}SC-${data.course.toUpperCase()}-${data.syllabus_year}`);
            updateSerachData(data)
          }, 0);
          return true
    };
    const useStyles = makeStyles({
        field:{
            marginInline:10
        },
        text:{
          fontWeight: 600,
          fontSize:30,
          textAlign:'center'
        }
      });
      const classes = useStyles();
      console.log(syllabusHeader)
  return (
    <div>
        {/* {syllabusHeader} */}
      <Formik
        initialValues={{
          degree: "bachelor",
          course: "cs",
          syllabus_year: "2022",
          year: "fy",
        }}
        onSubmit={submitFunc}
        // validationSchema={validateSchema}
      >
        {({ values, handleSubmit, setFieldValue,submitForm, resetForm, isSubmitting, }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" justifyContent="space-between" spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={2} md={2} >
           <Field
              className={classes.field}
              component={TextField}
              type="text"
              name="degree"
              label="Degree"
              select
              variant="standard"
              margin="normal"
              helperText="Please select degree"
              InputLabelProps={{
                shrink: true,
              }}
            >
                <MenuItem key='bachelor' value='bachelor'>Bachelor</MenuItem>
                <MenuItem key='master' value='master'>Master</MenuItem>
            </Field>
          </Grid>
          <Grid item xs={2} md={2} >
          <Field
              component={TextField}
              type="text"
              name="course"
              label="Course"
              select
              variant="standard"
              margin="normal"
              helperText="Please select course"
              InputLabelProps={{
                shrink: true,
              }}
            >
              <MenuItem key='cs' value='cs'>Computer science</MenuItem>
                <MenuItem key='it' value='it'>Information technology</MenuItem>
            </Field>
          </Grid>
          <Grid item xs={2} md={2} >
          <Field
              component={TextField}
              type="text"
              name="year"
              label="Semester year"
              select
              variant="standard"
              helperText="Please select semester year"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              <MenuItem key='fy' value='fy'>First year</MenuItem>
              <MenuItem key='sy' value='sy'>Second year</MenuItem>
              {values.degree === 'bachelor' && <MenuItem key='ty' value='ty'>Third year</MenuItem>}
            </Field>
          </Grid>
          <Grid item xs={2} md={2} >
          <Field
              component={TextField}
              type="text"
              name="syllabus_year"
              label="Year"
              select
            //   variant="standard"
              helperText="Please select year"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Field>
          </Grid>
          <Grid item xs={2} md={2} >
          <Button  style={{
        borderRadius: 15,
        backgroundColor: "black",
        fontSize: "16px"
    }}
    variant="contained" type='submit' >Search</Button>
          </Grid> 
          
            </Grid></Box>
          </form>
        )}
      </Formik>
      <Typography className={classes.text}>{syllabusHeader}</Typography>
    </div>
  );
};

export default SearchBar;
