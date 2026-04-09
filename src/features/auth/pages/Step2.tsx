import { Grid, Stack } from "@mui/material";
import CustomTextField from "../../../shared/components/CustomTextField";
import CustomButton from "../../../shared/components/CustomButton";

const Step2 = ({ formik }: any) => {
  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <CustomTextField
            label="Enter Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid size={8}>
          <CustomTextField
            label="Enter OTP"
            name="emailOtp"
            variant="outlined"
            fullWidth
            value={formik.values.emailOtp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.emailOtp && Boolean(formik.errors.emailOtp)}
            helperText={formik.touched.emailOtp && formik.errors.emailOtp}
          />
        </Grid>

        <Grid size={4}>
          <CustomButton text="Verify" variant="contained" fullWidth />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <CustomTextField
            label="Phone Number"
            name="phoneNumber"
            variant="outlined"
            fullWidth
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>

        <Grid size={8}>
          <CustomTextField
            label="Enter OTP"
            name="phoneOtp"
            variant="outlined"
            fullWidth
            value={formik.values.phoneOtp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneOtp && Boolean(formik.errors.phoneOtp)}
            helperText={formik.touched.phoneOtp && formik.errors.phoneOtp}
          />
        </Grid>

        <Grid size={4}>
          <CustomButton text="Verify" variant="contained" fullWidth />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Step2;