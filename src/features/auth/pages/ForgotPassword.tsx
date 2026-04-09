import { Box, Grid, Stack } from "@mui/material";
import { useFormik } from "formik";
import forgot_password from "../../../assets/forgot-password.jpg";
import Typo from "../../../shared/components/Typo";
import CustomTextField from "../../../shared/components/CustomTextField";
import CustomButton from "../../../shared/components/CustomButton";
import { forgotPasswordValidation } from "../validations/loginValidation";
import { useNavigate } from "react-router-dom";

const textStyle = {
  fontSize: {
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "14px",
  },
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: forgotPasswordValidation,
    onSubmit: (values) => {
      console.log("Forgot Password values:", values);
      navigate("/")
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
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={12}>
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
                </Grid>
                <Grid size={8}>
                  <CustomTextField
                    name="otp"
                    label="Enter Otp"
                    type="text"
                    variant="outlined"
                    fullWidth
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.otp && Boolean(formik.errors.otp)}
                    helperText={formik.touched.otp ? formik.errors.otp : ""}
                  />
                </Grid>
                <Grid size={4}>
                  <CustomButton
                    text="verify"
                    variant="contained"
                    fullWidth
                  />
                </Grid>
                <Grid size={12}>
                  <CustomTextField
                    name="password"
                    label="Enter Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password ? formik.errors.password : ""}
                  />

                </Grid>
                <Grid size={12}>
                  <CustomTextField
                    name="confirmPassword"
                    label="Enter Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword ? formik.errors.confirmPassword : ""}
                  />
                </Grid>
                <Grid size={12}>
                  <CustomButton
                    text="Continue"
                    variant="contained"
                    fullWidth
                    type="submit"
                  />
                </Grid>
              </Grid>
            </Stack>
          </form>

          <Typo
            variant="body2"
            sx={{
              textAlign: "center",
              ...textStyle,
            }}
          >
            New to React-Auth?
            <span
              style={{
                color: "#1976d2",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onClick={() => navigate("/create-account")}
            >
              Create account
            </span>
          </Typo>
        </Stack>
      </Box>
    </Box>
  );
};

export default ForgotPassword;