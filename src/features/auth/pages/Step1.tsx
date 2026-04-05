import { Stack } from '@mui/material'
import React from 'react'
import CustomTextField from '../../../shared/components/CustomTextField'

const Step1 = () => {
    return (
        <Stack spacing={2}>
            <CustomTextField
                label="First Name"
                variant="outlined"
            />

            <CustomTextField
                label="Last Name"
                variant="outlined"
            />

            <CustomTextField
                label="User Name"
                variant="outlined"
            />
        </Stack>
    )
}

export default Step1
