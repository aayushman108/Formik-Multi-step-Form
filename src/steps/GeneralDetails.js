import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FormikControl from '../FormControl';
import { clientType, tmsMemberBranch } from '../data';
import MaterialUIDate from '../components/MaterialUIDate';

const GeneralDetails = (props) => {
    const {errors, values} = props;
    console.log(props)
  return (
    <Box sx={{p:2, marginTop: "4em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>General Details</Typography>
    <Grid container justifyContent="center" rowSpacing={2}>
      <Grid item xs={12} md={8}>
        <FormikControl control='select' name="clientType" label= "Client Type*" options={clientType} values={values} />
      </Grid> 
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="mobileNumber" label= "Mobile Number*" optional="optional" type="number" values={values} />
      </Grid> 
      <Grid item xs={12} md={8}>
        <FormikControl control='select' name="memberBranch" label= "Member Branch*" options={tmsMemberBranch} values={values} />
      </Grid>
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="panNumber" label= "PAN Number" type="number" values={values}  />
      </Grid>
      <Grid item xs={12} md={8}>
        <FormikControl control='input' name="email" label= "Email*" type="email" values={values}  />
      </Grid>
    </Grid>
    </Box>
  )
}

export default GeneralDetails;
