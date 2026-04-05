import { Stack } from '@mui/material'
import React from 'react'
import CustomTextField from '../../../shared/components/CustomTextField'
import Typo from '../../../shared/components/Typo'
import CustomButton from '../../../shared/components/CustomButton'

interface LoginWithEmailPasswordProps {
    setLoginType: React.Dispatch<React.SetStateAction<"otp" | "password">>;
    textStyle: {
        fontSize: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
        };
    };
}

const LoginWithEmailPassword = ({
    setLoginType,
    textStyle,
}: LoginWithEmailPasswordProps) => {
    return (
        <Stack spacing={2}>
            <CustomTextField
                label="Enter Email"
                variant="outlined"
            />

            <CustomTextField
                label="Password"
                type="password"
                variant="outlined"
            />

            <Typo
                variant="body2"
                text="Forgotten Password"
                sx={{
                    textAlign: "right",
                    cursor: "pointer",
                    ...textStyle,
                }}
            />

            <CustomButton
                text="Login"
                variant="contained"
            />

            <Typo
                variant="body2"
                text="Login with OTP"
                onClick={() => setLoginType("otp")}
                sx={{
                    textAlign: "center",
                    cursor: "pointer",
                    ...textStyle,
                }}
            />
        </Stack>
    )
}

export default LoginWithEmailPassword
