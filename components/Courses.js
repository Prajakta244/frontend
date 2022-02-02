import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";

const Courses = () => {
  const theme = useTheme();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    paddingBlock: 40,
    alignSelf:'center',
    fontSize:'26px',
    margin:'auto',
    fontWeight:'bold',
    fontFamily:'sans-serif',
    borderRadius:'25px'
    
  }));
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
    <Grid container spacing={9} className="mt-10">
      <Grid item xs={6}>
        <Link href='/Syllabus'>
          <Item className="card" elevation={6} >Bsc-Computer science</Item>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Item className="card" elevation={6}>Msc-Computer science</Item>
      </Grid>
      <Grid item xs={6}>
        <Item className="card" elevation={6}>Bsc-Information technology</Item>
      </Grid>
      <Grid item xs={6}>
        <Item className="card" elevation={6}>Msc-Information technology</Item>
      </Grid>
    </Grid>
    </ThemeProvider>
    // <div className="grid grid-flow-row-dense grid-cols-4 mx-auto ">
    //     {/* <h1>courses here</h1> */}

    //     <div onClick={() => router.push('/courseContent')} className="card"><h4 className="m-auto text-center text-xl font-semibold">Bsc-Computer science</h4></div>
    //     <div className="card "><h4 className="m-auto text-center text-lg font-semibold ">Msc-Computer science</h4></div>
    //     <div className="card"><h4 className="m-auto items-center text-center text-lg font-semibold font-sans">Bsc-Information technology</h4></div>
    //     <div className="card"><h4 className="m-auto items-center text-center text-lg font-semibold">Msc-Information technology</h4></div>
    // </div>
  );
};

export default Courses;
