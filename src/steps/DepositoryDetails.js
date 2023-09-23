import React from 'react'
import FormikControl from '../FormControl';
import { Grid, Box, Typography } from '@mui/material';

const DepositoryDetails = (props) => {
  const {values}= props;
  return (
    <Box sx={{p:2, marginTop: "4em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Depository Details</Typography>
    <Grid container rowSpacing={3} columnSpacing={2} justifyContent= "center">
      <Grid item xs={12} md={8}>
        <FormikControl type="number" control="input" name="boid" values={values} label="BOID*" />
      </Grid>
    </Grid>
    </Box>
  )
}

export default DepositoryDetails;
