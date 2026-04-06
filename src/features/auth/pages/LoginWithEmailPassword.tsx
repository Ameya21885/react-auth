import { Stack } from "@mui/material";
import React from "react";
import { useFormik } from "formik";

import CustomTextField from "../../../shared/components/CustomTextField";
import Typo from "../../../shared/components/Typo";
import CustomButton from "../../../shared/components/CustomButton";

import { loginWithEmailPasswordValidation } from "../validations/loginValidation";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginWithEmailPasswordValidation,
        onSubmit: (values) => {
            console.log("Login values:", values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
                <CustomTextField
                    name="email"
                    label="Enter Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email ? formik.errors.email : ""}
                />

                <CustomTextField
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password ? formik.errors.password : ""}
                />

                <Typo
                    variant="body2"
                    text="Forgotten Password"
                    onClick={() => navigate("/forgot-password")}
                    sx={{
                        textAlign: "right",
                        cursor: "pointer",
                        ...textStyle,
                    }}
                />

                <CustomButton
                    text="Login"
                    variant="contained"
                    type="submit"
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
        </form>
    );
};

export default LoginWithEmailPassword;