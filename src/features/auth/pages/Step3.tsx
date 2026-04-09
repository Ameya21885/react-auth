import { Stack } from "@mui/material";
import CustomTextField from "../../../shared/components/CustomTextField";

const Step3 = ({ formik }: any) => {
  return (
    <Stack spacing={2}>
      <CustomTextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <CustomTextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        variant="outlined"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />
    </Stack>
  );
};

export default Step3;