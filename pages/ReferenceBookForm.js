import { useForm } from "react-hook-form";
import axios from "axios";
import { saveAs } from "file-saver";
import { Formik, useField,Field } from "formik";
import { makeStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Grid, InputLabel, MenuItem, option, Paper,   Typography } from "@mui/material";
import * as yup from "yup";
import {TextField,Select} from 'formik-mui'

const validateSchema = yup.object({
  degree: yup.boolean().required().oneOf([0, 1]),
});

const RadioBtn = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const Syllabus = () => {
  const { register, handleSubmit } = useForm();
  const useStyles = makeStyles({
    uploadBox:{
      fontSize:'15px',
      backgroundColor:'white',
      borderRadius:'40px',
      width:'350px',
      outline:'none',
      boxShadow:'2px 2px 10px black',
      marginBlock:'25px',
      // padding:'-7px'
    },
    label:{
      marginTop:'18px'
    },
    text:{
      fontWeight: 600,
      fontSize:30,
      textAlign:'center'
    }
  });
  const paperStyle = {
    padding:20,
    height:'100vh',
    width:500,
    margin:'20px auto',
    
  }
  const classes = useStyles();
  const submitFunc = (data) => {
    console.log('submit',data);
    const formdata = new FormData();
    formdata.append("filepath", data.file);
    formdata.append("degree", data.degree);
    formdata.append("course", data.course);
    formdata.append("year", data.year);
    formdata.append("subject", data.subject);
    
    axios
      .post("http://127.0.0.1:8000/reference_book", formdata, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return true
  };
  const year = 2010;
  const years = Array.from(new Array(20),( val, index) => index + year);
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
      <Typography className={classes.text}>Add Syllabus</Typography>
      <div className="ml-12">
      <Formik
        validateOnChange={true}
        initialValues={{
          degree: "",
          course:"",
          year:"",
          file:"",
          subject:"0"
        }}
        onSubmit={submitFunc}
        // validationSchema={validateSchema}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel className={classes.label} id="degree">Degree</FormLabel>
              <RadioGroup row aria-labelledby="degree">
                <RadioBtn
                  name="degree"
                  value="bachelor"
                  type="radio"
                  label="Bachelor"
                />
                <RadioBtn
                  name="degree"
                  value="master"
                  type="radio"
                  label="Master"
                />
              </RadioGroup>
              <FormLabel className={classes.label} id="course">Course</FormLabel>
              <RadioGroup row aria-labelledby="course">
                <RadioBtn
                  name="course"
                  value="cs"
                  type="radio"
                  label="Computer science"
                />
                <RadioBtn
                  name="course"
                  value="it"
                  type="radio"
                  label="Information technology"
                />
              </RadioGroup>
              {/* {values} */}
              <FormLabel className={classes.label} id="year">Year</FormLabel>
              <RadioGroup row aria-labelledby="year">
                <RadioBtn
                  name="year"
                  value="fy"
                  type="radio"
                  label="First Year"
                />
                <RadioBtn
                  name="year"
                  value="sy"
                  type="radio"
                  label="Second Year"
                />
                {values.degree === 'bachelor' && (<RadioBtn
                  name="year"
                  value="ty"
                  type="radio"
                  label="Third Year"
                />)}
              </RadioGroup>
        <Field
              component={TextField}
              type="text"
              name="subject"
              label="Year"
              select
              variant="standard"
              helperText="Please select subject"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
                <MenuItem key='subject1' value='subject1'>
                  Subject1
                </MenuItem>
                <MenuItem key='subject2' value='subject2'>
                  Subject2
                </MenuItem>
                <MenuItem key='subject3' value='subject3'>
                  Subject3
                </MenuItem>
                <MenuItem key='subject4' value='subject4'>
                  Subject4
                </MenuItem>
                <MenuItem key='subject5' value='subject5'>
                  Subject5
                </MenuItem>
            </Field>
            <input
              {...register("file", { required: true })}
              type="file"
              name="file"
              onChange={(event) => {
                setFieldValue("file", event.currentTarget.files[0])}}
              // id="contained-button-file"
              className={classes.uploadBox}
            />
            {/* <input
              type="text"
              {...register("course", { required: true })}
              id=""
            /> */}
            <Button  style={{
        borderRadius: 15,
        // width:160,
        backgroundColor: "greenyellow",
        padding: "10px 20px",
        fontSize: "16px"
    }}
    variant="contained" type='submit' >Submit</Button>
            </FormControl>
            {/* <pre>{JSON.stringify(values,null,2)}</pre> */}
          </form>
        )}
      </Formik>
      </div>
      </Paper>
     </Grid>
  );
};

export default Syllabus;
