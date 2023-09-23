import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FormikControl from '../FormControl';
import { state, district } from '../data';

const AddressDetails = (props) => {
  const {errors, touched, values}= props;

  let districtArray= [];
  if(values && values.state){
    const districtObject= district.find(dist=> dist.key===values.state);
    districtArray= districtObject.value;
  }
  return (
    <Box sx={{p:2, marginTop: "4em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Address Details</Typography>
    <Grid container rowSpacing={3} columnSpacing={2} justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <FormikControl control='input' name="countryOfResidence" label= "Country of Residence*" values={values} />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <FormikControl control='select' name="state" label= "State*" options={state} values={values} />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <FormikControl control='select' name="district" label= "District*" options={districtArray} values={values} />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <FormikControl control='input' name="municipality" label= "Municipality*" values={values} />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <FormikControl control='input' name="ward" label= "Ward No.*" options={state} type="number" values={values} />
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <FormikControl control='input' name="street" label= "Street*" values={values} />
      </Grid>
    </Grid>
    </Box>
  )
}

export default AddressDetails;
