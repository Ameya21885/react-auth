import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";

interface StepItem {
  label: string;
  component: React.ReactNode;
  optional?: boolean;
}

interface FormStepperProps {
  steps: StepItem[];
  formik: any;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormStepper = ({ steps, formik, activeStep, setActiveStep }: FormStepperProps) => {
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => steps[step]?.optional ?? false;
  const isStepSkipped = (step: number) => skipped.has(step);

  const stepFields: Record<number, string[]> = {
    0: ["firstName", "lastName", "userName"],
    1: ["email", "emailOtp", "phoneNumber", "phoneOtp"],
    2: ["password", "confirmPassword"],
  };

  const handleNext = async () => {
    const currentFields = stepFields[activeStep] || [];

    const errors = await formik.validateForm();

    const newTouched: Record<string, boolean> = {};
    currentFields.forEach((field) => {
      newTouched[field] = true;
    });

    formik.setTouched(
      {
        ...formik.touched,
        ...newTouched,
      },
      false
    );

    if (Object.keys(errors).length > 0) {
      formik.setErrors(errors);
      return;
    }

    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped);
      newSkipped.delete(activeStep);
    }

    if (activeStep === steps.length - 1) {
      formik.handleSubmit();
      setActiveStep((prev) => prev + 1);
    } else {
      setActiveStep((prev) => prev + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped);
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          if (step.optional) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 3, mb: 2 }}>
            All steps completed - you're finished
          </Typography>
        </>
      ) : (
        <>
          <Box sx={{ mt: 4 }}>{steps[activeStep].component}</Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default FormStepper;