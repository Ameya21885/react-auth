import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import CustomTextField from "../../../shared/components/CustomTextField";
import CustomButton from "../../../shared/components/CustomButton";
import {
  useSendRegistrationEmailOtpMutation,
  useSendRegistrationPhoneOtpMutation,
  useVerifyOtpMutation,
} from "../../../app/services/authApi";

const Step2 = ({ formik }: any) => {
  const [sendRegistrationEmailOtp, { isLoading: isSendingEmailOtp }] =
    useSendRegistrationEmailOtpMutation();
  const [sendRegistrationPhoneOtp, { isLoading: isSendingPhoneOtp }] =
    useSendRegistrationPhoneOtpMutation();
  const [verifyOtp, { isLoading: isVerifyingOtp }] = useVerifyOtpMutation();

  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [phoneOtpVerified, setPhoneOtpVerified] = useState(false);

  const handleSendEmailOtp = async () => {
    if (formik.values.email && !formik.errors.email) {
      try {
        await sendRegistrationEmailOtp({ email: formik.values.email }).unwrap();
        setEmailOtpSent(true);
        alert("OTP sent to your email.");
      } catch (err) {
        console.error("Send Email OTP error:", err);
      }
    } else {
      formik.setFieldTouched("email", true);
    }
  };

  const handleVerifyEmailOtp = async () => {
    if (formik.values.emailOtp && !formik.errors.emailOtp) {
      try {
        await verifyOtp({
          identifier: formik.values.email,
          otp: formik.values.emailOtp,
        }).unwrap();
        setEmailOtpVerified(true);
        alert("Email verified successfully.");
      } catch (err) {
        console.error("Verify Email OTP error:", err);
      }
    } else {
      formik.setFieldTouched("emailOtp", true);
    }
  };

  const handleSendPhoneOtp = async () => {
    if (formik.values.phoneNumber && !formik.errors.phoneNumber) {
      try {
        await sendRegistrationPhoneOtp({
          phoneNumber: formik.values.phoneNumber,
        }).unwrap();
        setPhoneOtpSent(true);
        alert("OTP sent to your phone.");
      } catch (err) {
        console.error("Send Phone OTP error:", err);
      }
    } else {
      formik.setFieldTouched("phoneNumber", true);
    }
  };

  const handleVerifyPhoneOtp = async () => {
    if (formik.values.phoneOtp && !formik.errors.phoneOtp) {
      try {
        await verifyOtp({
          identifier: formik.values.phoneNumber,
          otp: formik.values.phoneOtp,
        }).unwrap();
        setPhoneOtpVerified(true);
        alert("Phone verified successfully.");
      } catch (err) {
        console.error("Verify Phone OTP error:", err);
      }
    } else {
      formik.setFieldTouched("phoneOtp", true);
    }
  };

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <CustomTextField
            label="Enter Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid size={4}>
          <CustomButton
            text={isSendingEmailOtp ? "Sending..." : "Send OTP"}
            variant="outlined"
            fullWidth
            onClick={handleSendEmailOtp}
            disabled={isSendingEmailOtp || emailOtpSent}
          />
        </Grid>

        <Grid size={8}>
          <CustomTextField
            label="Enter OTP"
            name="emailOtp"
            variant="outlined"
            fullWidth
            disabled={!emailOtpSent}
            value={formik.values.emailOtp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.emailOtp && Boolean(formik.errors.emailOtp)}
            helperText={formik.touched.emailOtp && formik.errors.emailOtp}
          />
        </Grid>

        <Grid size={4}>
          <CustomButton
            text={isVerifyingOtp ? "Verifying..." : "Verify"}
            variant="contained"
            fullWidth
            onClick={handleVerifyEmailOtp}
            disabled={isVerifyingOtp || emailOtpVerified || !emailOtpSent}
          />
        </Grid>

        <Grid size={8}>
          <CustomTextField
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            fullWidth
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>
        <Grid size={4}>
          <CustomButton
            text={isSendingPhoneOtp ? "Sending..." : "Send OTP"}
            variant="outlined"
            fullWidth
            onClick={handleSendPhoneOtp}
            disabled={isSendingPhoneOtp || phoneOtpSent}
          />
        </Grid>

        <Grid size={8}>
          <CustomTextField
            label="Enter OTP"
            name="phoneOtp"
            variant="outlined"
            fullWidth
            disabled={!phoneOtpSent}
            value={formik.values.phoneOtp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneOtp && Boolean(formik.errors.phoneOtp)}
            helperText={formik.touched.phoneOtp && formik.errors.phoneOtp}
          />
        </Grid>

        <Grid size={4}>
          <CustomButton
            text={isVerifyingOtp ? "Verifying..." : "Verify"}
            variant="contained"
            fullWidth
            onClick={handleVerifyPhoneOtp}
            disabled={isVerifyingOtp || phoneOtpVerified || !phoneOtpSent}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Step2;
