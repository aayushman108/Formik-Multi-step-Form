import React from 'react';
import FormikControl from '../FormControl';
import { Box, Grid, Typography } from '@mui/material';
import { nrnAndMinor, citizenshipIssuedPlace, maritalStatus, financialDetail } from '../data';

const IndividualDetails = (props) => {
  const {touched, errors, values, setFieldValue, setFieldTouched}= props;
  console.log(props)
  return (
    <Box sx={{p:2, margin: "2em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Individual Details</Typography>
    <Grid container rowSpacing={3} columnSpacing={3} display="flex" justifyContent="center">
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="firstName" label= "First Name*" type="text" values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="middleName" label= "Middle Name" type="text" values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="lastName" label= "Last Name*" type="text" values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
          <FormikControl control='date' name="dateOfBirthBS" values={values} setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} errors={errors} touched={touched} label= "Date of Birth (B.S.)*" type="date"  />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
          <FormikControl control='date' name="dateOfBirthAD" values={values} setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} errors={errors} touched={touched} label= "Date of Birth (A.D.)*" type="date"  />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="fatherName" label= "Father's Name*" type="text" values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="motherName" label= "Mother's Name*" type="text" values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="grandfatherName" label= "Grandfather's Name*" type="text" values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
          <FormikControl control='radio' name="isNRN" errors={errors} touched={touched} label= "Is NRN?*" options={nrnAndMinor} values={values} />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
          <FormikControl control='radio' name="isMinor" errors={errors} touched={touched} label= "Is Minor*" options={nrnAndMinor} values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="nationality" label= "Nationality*" type="text" values={values}  />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='input' name="citizenship" label= "Citizenship Number*" values={values} />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
          <FormikControl control='select' name="citizenshipIssuedPlace" label= "Citizenship Issued Place*" options={citizenshipIssuedPlace} values={values} />
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
          <FormikControl control='date' name="citizenshipIssuedDateBS" setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} values={values} errors={errors} touched={touched} label= "Citizenship Issued Date (B.S.)*" type="date"  />
      </Grid>
      <Grid item xs={12} md={10} lg={6}>
          <FormikControl control='date' name="citizenshipIssuedDateAD" setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} values={values} errors={errors} touched={touched} label= "Citizenship Issued Date (A.D.)*" type="date"  />
      </Grid>
      <Grid item xs={12} md={10} lg={6}>
          <FormikControl control='select' name="maritalStatus" label= "Marital Status*" options={maritalStatus} values={values} />
      </Grid>
      <Grid item xs={12} md={10} lg={6}>
          <FormikControl control='select' name="financialDetail" label= "Financial Detail*" options={financialDetail} values={values} />
      </Grid>
    </Grid>
    </Box>
  )
}

export default IndividualDetails;
