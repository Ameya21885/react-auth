import { Typography } from "@mui/material";
import type { TypoProps } from "../types/type";

const Typo = ({ variant = "body1", text, children, ...rest }: TypoProps) => {
  return (
    <Typography variant={variant} {...rest}>
      {text || children}
    </Typography>
  );
};

export default Typo;