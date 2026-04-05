import { Stack } from '@mui/material'
import CustomTextField from '../../../shared/components/CustomTextField'
import Typo from '../../../shared/components/Typo'
import CustomButton from '../../../shared/components/CustomButton'

interface LoginWithEmailWhatsappProps {
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

const LoginWithEmailWhatsapp = ({
    setLoginType,
    textStyle,
}: LoginWithEmailWhatsappProps) => {
    return (
        <Stack spacing={2}>
            <CustomTextField
                label="Enter Email or WhatsApp number"
                variant="outlined"
            />

            <Typo
                variant="body2"
                text="By continuing, you agree to ipshopy's Terms of Use and Privacy Policy."
                sx={{
                    textAlign: "center",
                    ...textStyle,
                }}
            />

            <CustomButton
                text="Request OTP"
                variant="contained"
            />

            <Typo
                variant="body2"
                text="Login with Password"
                onClick={() => setLoginType("password")}
                sx={{
                    textAlign: "center",
                    cursor: "pointer",
                    ...textStyle,
                }}
            />
        </Stack>
    )
}

export default LoginWithEmailWhatsapp
