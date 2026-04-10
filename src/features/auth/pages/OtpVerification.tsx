import { Box, Stack } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

import Typo from "../../../shared/components/Typo";
import CustomTextField from "../../../shared/components/CustomTextField";
import CustomButton from "../../../shared/components/CustomButton";
import Otp_verification from "../../../assets/otp-verification.jpg";
import { otpVerificationValidation } from "../validations/loginValidation";
import { useVerifyOtpMutation } from "../../../app/services/authApi";

const textStyle = {
  fontSize: {
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "14px",
  },
};

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const identifier = location.state?.identifier || "";
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpVerificationValidation,
    onSubmit: async (values) => {
      try {
        await verifyOtp({
          identifier: identifier,
          otp: values.otp,
        }).unwrap();
        alert("Verification successful!");
        navigate('/dashboard');
      } catch (err) {
        console.error("Verification error:", err);
      }
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
          src={Otp_verification}
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
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <Typo
            variant="h5"
            text="Otp Verification"
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

          {identifier && (
            <Typo
              variant="body2"
              text={`OTP sent to ${identifier}`}
              sx={{ textAlign: "center", mb: 1 }}
            />
          )}

          <Stack spacing={2}>
            <CustomTextField
              label="Enter OTP"
              name="otp"
              variant="outlined"
              fullWidth
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />

            <CustomButton
              text={isLoading ? "Verifying..." : "Continue"}
              variant="contained"
              fullWidth
              type="submit"
              disabled={isLoading}
            />
          </Stack>

          <Typo
            variant="body2"
            sx={{
              textAlign: "center",
              ...textStyle,
            }}
          >
            New to React-Auth?{" "}
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

export default OtpVerification;