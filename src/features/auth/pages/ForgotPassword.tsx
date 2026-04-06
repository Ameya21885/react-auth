import { Box, Stack } from "@mui/material";
import { useFormik } from "formik";
import forgot_password from "../../../assets/forgot-password.jpg";
import Typo from "../../../shared/components/Typo";
import CustomTextField from "../../../shared/components/CustomTextField";
import CustomButton from "../../../shared/components/CustomButton";
import { forgotPasswordValidation } from "../validations/loginValidation";

const textStyle = {
  fontSize: {
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "14px",
  },
};

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidation,
    onSubmit: (values) => {
      console.log("Forgot Password values:", values);
    },
  });

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
          src={forgot_password}
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
            text="Forgot Password"
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

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <CustomTextField
                name="email"
                label="Enter Email id"
                variant="outlined"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email ? formik.errors.email : ""}
              />

              <CustomButton
                text="Continue"
                variant="contained"
                fullWidth
                type="submit"
              />
            </Stack>
          </form>

          <Typo
            variant="body2"
            text="New to React-Auth? Create account"
            sx={{
              textAlign: "center",
              ...textStyle,
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ForgotPassword;