import { Grid, Stack } from '@mui/material'
import CustomTextField from '../../../shared/components/CustomTextField'
import CustomButton from '../../../shared/components/CustomButton'

const Step2 = () => {
    return (
       <Stack spacing={2}>
  <Grid container spacing={2}>
    
    <Grid size={{ xs: 12 }}>
      <CustomTextField
        label="Enter Email"
        variant="outlined"
        fullWidth
      />
    </Grid>

    <Grid size={8}>
      <CustomTextField
        label="Enter OTP"
        variant="outlined"
        fullWidth
      />
    </Grid>

    <Grid size={4}>
      <CustomButton
        text="Verify"
        variant="contained"
        fullWidth
      />
    </Grid>

    <Grid size={{ xs: 12 }}>
      <CustomTextField
        label="Phone Number"
        variant="outlined"
        fullWidth
      />
    </Grid>

    <Grid size={8}>
      <CustomTextField
        label="Enter OTP"
        variant="outlined"
        fullWidth
      />
    </Grid>

    <Grid size={4}>
      <CustomButton
        text="Verify"
        variant="contained"
        fullWidth
      />
    </Grid>

  </Grid>
</Stack>
    )
}

export default Step2
