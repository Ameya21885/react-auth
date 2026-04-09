import { Stack } from "@mui/material";
import CustomTextField from "../../../shared/components/CustomTextField";

const Step1 = ({ formik }: any) => {
  return (
    <Stack spacing={2}>
      <CustomTextField
        label="First Name"
        name="firstName"
        variant="outlined"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />

      <CustomTextField
        label="Last Name"
        name="lastName"
        variant="outlined"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />

      <CustomTextField
        label="User Name"
        name="userName"
        variant="outlined"
        value={formik.values.userName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
      />
    </Stack>
  );
};

export default Step1;