import { Grid, Box, Typography } from '@mui/material';
import React from 'react'
import FormikControl from '../FormControl';
import PreviewImg from '../PreviewImg';

const DocumentsUpload = (props) => {
    const {setFieldValue, values, errors, touched, handleBlur, setFieldTouched}= props;
    const fileRef= React.useRef(null);
  return (
    <Box sx={{p:2, marginTop: "4em"}}>
    <Typography variant='h4' mb={{md: "1.5em", xs: "0.7em"}} align='center'>Documents Upload</Typography>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <FormikControl type="file" name="pan" label="PAN*" setFieldTouched={setFieldTouched} handleBlur={handleBlur} control="image" touched={touched} errors={errors} setFieldValue={setFieldValue} values={values} />
      </Grid>
      <Grid item xs={12}>
        <FormikControl type="file" name="photo" label="Photo*" setFieldTouched={setFieldTouched} handleBlur={handleBlur} control="image" touched={touched} errors={errors} setFieldValue={setFieldValue} values={values} />
      </Grid>
      <Grid item xs={12}>
        <FormikControl type="file" name="citizenshipCertificate" label="Citizenship Certificate*" setFieldTouched={setFieldTouched} handleBlur={handleBlur} control="image" touched={touched} errors={errors} setFieldValue={setFieldValue} values={values} />
      </Grid>
    {/*<input type="file" ref={fileRef} name="pan" onChange={(e)=> setFieldValue("pan", e.target.files[0])} />
    <input type="file" name="photo" onChange={(e)=> setFieldValue("photo", e.target.files[0])} />
  <input type="file" name="citizenship" onChange={(e)=> setFieldValue("citizenship", e.target.files[0])} />
    <button onClick={e=>{fileRef.current.click();}}>Upload</button>
    <PreviewImg file={values.pan} />*/}
    </Grid>
    </Box>
  )
}

export default DocumentsUpload;
