import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import * as Yup from "yup";
import { FormikWizard, useFormikWizard } from "formik-wizard-form";
import GeneralDetails from "./steps/GeneralDetails";
import IndividualDetails from "./steps/IndividualDetails";
import AddressDetails from "./steps/AddressDetails";
import BankDetails from "./steps/BankDetails";
import DepositoryDetails from "./steps/DepositoryDetails";
import DocumentsUpload from "./steps/DocumentsUpload";
import { useFormikContext } from "formik";
import { clientType } from "./data";

export default function App() {
  const [finalValues, setFinalValues] = React.useState({});
  const [finished, setFinished] = React.useState(false);
  return (
    <div className="App">
      <FormikWizard
        initialValues={{
        }}
        onSubmit={(values) => {
          setFinalValues(values);
          setFinished(true);
          alert(JSON.stringify(values, null, 2))
        }}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: GeneralDetails,
            validationSchema: Yup.object().shape({
              clientType: Yup.string().required("Required"),
              mobileNumber: Yup.string().required("Required").matches(/^(\+977-|977-)?(98)\d{8}$/, "Invalid Phone Number"),
              memberBranch: Yup.string().required("Required"),
              panNumber: Yup.string().matches(/^\d{10}$/, "Invalid PAN Number"),
              email: Yup.string().email().required("Required").matches(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, "Invalid Email"),
            })
          },
          {
            component: IndividualDetails,
            validationSchema: Yup.object().shape({
              firstName: Yup.string().required("Required"),
              middleName: Yup.string(),
              lastName: Yup.string().required("Required"),
              dateOfBirthAD: Yup.date().required("Required"),
              dateOfBirthBS: Yup.date().required("Required"),
              fatherName:Yup.string().required("Required"),
              motherName: Yup.string().required("Required"),
              grandfatherName: Yup.string().required("Required"),
              isNRN: Yup.string().required("Required"),
              isMinor: Yup.string().required("Required"),
              nationality: Yup.string().required("Required"),
              citizenship: Yup.string().required("Required"),
              citizenshipIssuedPlace: Yup.string().required("Required"),
              citizenshipIssuedDateBS: Yup.date().required("Required"),
              citizenshipIssuedDateAD: Yup.date().required("Required"),
              maritalStatus: Yup.string().required("Required"),
              financialDetail: Yup.string().required("Required"),
            })
          },
          {
            component: AddressDetails,
            validationSchema: Yup.object().shape({
              countryOfResidence: Yup.string().required("Required"),
              state: Yup.string().required("Required"),
              district: Yup.string().required("Required"),
              municipality: Yup.string().required("Required"),
              ward: Yup.string().required("Required"),
              street: Yup.string().required("Required"),
            })
          },
          {
            component: BankDetails,
            validationSchema: Yup.object().shape({
              bank: Yup.string().required("Required"),
              branch:  Yup.string().required("Required"),
              accountType:  Yup.string().required("Required"),
              accountNumber:  Yup.string().required("Required").matches(/^\d{16}$/, "Invalid Account Number")
            })
          },
          {
            component: DepositoryDetails,
            validationSchema: Yup.object().shape({
              boid: Yup.string().required("Required").matches(/^\d{13}$/, "Invalid BOID")
            })
          },
          {
            component: DocumentsUpload,
            validationSchema: Yup.object().shape({
              pan: Yup.mixed().required("Please select an image to upload").test("FILE_SIZE", "File size is too large", value=> value && value.size <= 1024*1024).test("FILE_TYPE", "Unsupported file type", value=> value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)),

              photo:  Yup.mixed().required("Please select an image to upload").test("FILE_SIZE", "File size is too large", value=> value && value.size <= 1024*1024).test("FILE_TYPE", "Unsupported file type", value=> value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)),

              citizenshipCertificate:  Yup.mixed().required("Please select an image to upload").test("FILE_SIZE", "File size is too large", value=> value && value.size <= 1024*1024).test("FILE_TYPE", "Unsupported file type", value=> value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)),
            })
          }
        ]}
      >
        {(props) => {
          const {
            currentStepIndex,
            renderComponent,
            handlePrev,
            handleNext,
            isNextDisabled,
            isPrevDisabled,
            isValid,
            isSubmitting,
            values
          }= props;
          console.log(props)
          return (
            <>
              <Box sx={{display: {sm:"none", xs:"flex"}, justifyContent: "center", marginTop: {xs: "1em", sm: "1.5em", md: "2.5em", lg: "4em"}}}>
                <Stepper sx={{width: {xs:"80%"}}} activeStep={currentStepIndex} orientation="vertical">
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>General Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 1}>
                    <StepLabel>Individual Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 2}>
                    <StepLabel>Address Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 3}>
                    <StepLabel>Bank Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 4}>
                    <StepLabel>Depository Details</StepLabel>
                  </Step>
                  <Step completed={finished}>
                    <StepLabel>Documents Upload</StepLabel>
                  </Step>
                </Stepper>
              </Box>
              <Box sx={{display: {sm:"flex", xs:"none"}, justifyContent: "center", marginTop: {xs: "1em", sm: "1.5em", md: "2.5em", lg: "4em"}}}>
                <Stepper sx={{width: {xs:"100%", md: "80%", lg:"70%"}}} activeStep={currentStepIndex} alternativeLabel>
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>General Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 1}>
                    <StepLabel>Individual Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 2}>
                    <StepLabel>Address Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 3}>
                    <StepLabel>Bank Details</StepLabel>
                  </Step>
                  <Step completed={currentStepIndex > 4}>
                    <StepLabel>Depository Details</StepLabel>
                  </Step>
                  <Step completed={finished}>
                    <StepLabel>Documents Upload</StepLabel>
                  </Step>
                </Stepper>
              </Box>
              <Box my="2rem">{renderComponent()}</Box>
              <Box display="flex" mb={"2em"} mx={"2em"} justifyContent="space-between">
                <Button
                  variant="outlined"
                  disabled={isPrevDisabled}
                  type="primary"
                  onClick={handlePrev}
                >
                  Previous
                </Button>
                <Button
                  variant="contained"
                  disabled={!isValid || isSubmitting}
                  type="primary"
                  onClick={handleNext}
                >
                  {currentStepIndex === 5? "Finish" : "Next"}
                </Button>
              </Box>
              <Box>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Box>
            </>
          );
        }}
      </FormikWizard>
    </div>
  );
}
