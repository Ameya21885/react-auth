import { Button } from "@mui/material";
import type { AppButtonProps } from "../types/type";

const CustomButton = ({
  text,
  variant = "contained",
  size = "small",
  ...rest
}: AppButtonProps) => {
  return (
    <Button variant={variant} size={size} {...rest}>
      {text}
    </Button>
  );
};

export default CustomButton;