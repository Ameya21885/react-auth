import { Stack } from '@mui/material'
import CustomTextField from '../../../shared/components/CustomTextField'

const Step3 = () => {
    return (
        <Stack spacing={2}>
            <CustomTextField
                label="Password"
                variant="outlined"
            />

            <CustomTextField
                label="Confirm Password"
                variant="outlined"
            />

        </Stack>
    )
}

export default Step3
