import { TextField } from "@mui/material";
import type { AppTextFieldProps } from "../types/type";

const CustomTextField = ({
  label,
  variant = "standard",
  ...rest
}: AppTextFieldProps) => {
  return <TextField label={label} variant={variant} {...rest} size="small" fullWidth/>;
};

export default CustomTextField;