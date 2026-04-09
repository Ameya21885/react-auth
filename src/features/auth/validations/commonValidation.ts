import * as Yup from "yup";

export const emailValidation = Yup.string()
  .email("Enter a valid email")
  .required("Email is required");

export const passwordValidation = Yup.string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters");

export const confirmPasswordValidation = Yup.string()
  .required("Confirm password is required");

export const emailOrWhatsappValidation = Yup.string()
  .required("Email or WhatsApp number is required")
  .test(
    "email-or-phone",
    "Enter a valid email or WhatsApp number",
    (value) => {
      if (!value) return false;

      const trimmedValue = value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[6-9]\d{9}$/;

      return emailRegex.test(trimmedValue) || phoneRegex.test(trimmedValue);
    }
  );

export const otpValidation = Yup.string()
  .required("OTP is required")
  .matches(/^\d{6}$/, "OTP must be 6 digits");

export const phoneValidation = Yup.string()
  .required("Phone number is required")
  .matches(/^[6-9]\d{9}$/, "Enter a valid phone number");

export const firstNameValidation = Yup.string().required("First name is required");

export const lastNameValidation = Yup.string().required("Last name is required");

export const userNameValidation = Yup.string().required("User name is required");