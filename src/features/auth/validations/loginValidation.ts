import * as Yup from "yup";
import {
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  emailOrWhatsappValidation,
  otpValidation,
  phoneValidation,
  firstNameValidation,
  lastNameValidation,
  userNameValidation,
} from "./commonValidation";

export const loginWithEmailWhatsappValidation = Yup.object({
  emailOrWhatsapp: emailOrWhatsappValidation,
});

export const loginWithEmailPasswordValidation = Yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export const forgotPasswordValidation = Yup.object({
  email: emailValidation,
  otp: otpValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation.oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

export const otpVerificationValidation = Yup.object({
  otp: otpValidation,
});

export const createAccountStep1Validation = Yup.object({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  userName: userNameValidation,
});

export const createAccountStep2Validation = Yup.object({
  email: emailValidation,
  emailOtp: otpValidation,
  phoneNumber: phoneValidation,
  phoneOtp: otpValidation,
});

export const createAccountStep3Validation = Yup.object({
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation.oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

export const createAccountValidationSchemas = [
  createAccountStep1Validation,
  createAccountStep2Validation,
  createAccountStep3Validation,
];