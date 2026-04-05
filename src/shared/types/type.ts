import type { TypographyProps, ButtonProps, TextFieldProps   } from "@mui/material";

export interface TypoProps extends TypographyProps {
  text: string;
  variant?: TypographyProps["variant"];
}

export interface AppButtonProps extends ButtonProps {
  text: string;
  variant?: ButtonProps["variant"];
}

export type AppTextFieldProps = TextFieldProps & {
  label: string;
  variant?: TextFieldProps["variant"];
};