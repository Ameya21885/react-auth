import { Typography } from "@mui/material";
import type { TypoProps } from "../types/type";

const Typo = ({ variant = "body1", text, ...rest }: TypoProps) => {
  return (
    <Typography variant={variant} {...rest}>
      {text}
    </Typography>
  );
};

export default Typo;