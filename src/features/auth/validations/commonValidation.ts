import * as Yup from "yup";

export const emailValidation = Yup.string()
  .email("Enter a valid email")
  .required("Email is required");

export const passwordValidation = Yup.string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters");

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