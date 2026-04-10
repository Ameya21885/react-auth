import { Stack } from "@mui/material";
import { useFormik } from "formik";
import CustomTextField from "../../../shared/components/CustomTextField";
import Typo from "../../../shared/components/Typo";
import CustomButton from "../../../shared/components/CustomButton";
import { loginWithEmailWhatsappValidation } from "../validations/loginValidation";
import { useNavigate } from "react-router-dom";
import { useSendOtpMutation } from "../../../app/services/authApi";

interface LoginWithEmailWhatsappProps {
  setLoginType: React.Dispatch<React.SetStateAction<"otp" | "password">>;
  textStyle: {
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  };
}

const LoginWithEmailWhatsapp = ({
  setLoginType,
  textStyle,
}: LoginWithEmailWhatsappProps) => {

  const navigate = useNavigate();
  const [sendOtp, { isLoading }] = useSendOtpMutation();

  const formik = useFormik({
    initialValues: {
      emailOrWhatsapp: "",
    },
    validationSchema: loginWithEmailWhatsappValidation,
    onSubmit: async (values) => {
      try {
        await sendOtp({ identifier: values.emailOrWhatsapp }).unwrap();
        navigate('/otp-verification', { state: { identifier: values.emailOrWhatsapp } });
      } catch (err) {
        console.error("Send OTP error:", err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <CustomTextField
          name="emailOrWhatsapp"
          label="Enter Email or WhatsApp number"
          variant="outlined"
          value={formik.values.emailOrWhatsapp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.emailOrWhatsapp &&
            Boolean(formik.errors.emailOrWhatsapp)
          }
          helperText={
            formik.touched.emailOrWhatsapp
              ? formik.errors.emailOrWhatsapp
              : ""
          }
        />

        <Typo
          variant="body2"
          text="By continuing, you agree to React-Auth's Terms of Use and Privacy Policy."
          sx={{
            textAlign: "center",
            ...textStyle,
          }}
        />

        <CustomButton
          text={isLoading ? "Requesting..." : "Request OTP"}
          variant="contained"
          type="submit"
          disabled={isLoading}
        />

        <Typo
          variant="body2"
          text="Login with Password"
          onClick={() => setLoginType("password")}
          sx={{
            textAlign: "center",
            cursor: "pointer",
            ...textStyle,
          }}
        />
      </Stack>
    </form>
  );
};

export default LoginWithEmailWhatsapp;