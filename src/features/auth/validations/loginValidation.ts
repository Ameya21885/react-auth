import * as Yup from "yup";

import {
  emailValidation,
  passwordValidation,
  emailOrWhatsappValidation,
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
});