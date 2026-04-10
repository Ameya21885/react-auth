import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Typo from "../../../shared/components/Typo";
import create_account from "../../../assets/create-account.jpg";
import FormStepper from "../components/FormStepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { createAccountValidationSchemas } from "../validations/loginValidation";
import { useRegisterMutation } from "../../../app/services/authApi";

const CreateAccount = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      emailOtp: "",
      phoneNumber: "",
      phoneOtp: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      try {
        await register(values).unwrap();
        alert("Account created successfully!");
        navigate("/login");
      } catch (err) {
        console.error("Registration error:", err);
      }
    },
    validationSchema: createAccountValidationSchemas[activeStep],
    validateOnBlur: true,
    validateOnChange: true,
  });

  const steps = [
    {
      label: "Basic Details",
      component: <Step1 formik={formik} />,
    },
    {
      label: "Business Details",
      component: <Step2 formik={formik} />,
      optional: true,
    },
    {
      label: "Verification",
      component: <Step3 formik={formik} />,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          p: { md: 4, lg: 5 },
        }}
      >
        <Box
          component="img"
          src={create_account}
          alt="forgot_password"
          sx={{
            width: { md: "90%", lg: "80%" },
            maxWidth: { md: 420, lg: 500 },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          minHeight: { xs: "100vh", md: "100vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            width: "100%",
            maxWidth: { xs: 350, sm: 400, md: 420, lg: 450 },
            mx: "auto",
          }}
        >
          <Typo
            variant="h5"
            text="Create Account"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: {
                xs: "16px",
                sm: "20px",
                md: "28px",
                lg: "32px",
              },
            }}
          />

          <Stack spacing={2}>
            <FormStepper
              steps={steps}
              formik={formik}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default CreateAccount;