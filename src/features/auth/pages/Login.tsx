import { Box, Stack } from "@mui/material";
import { useState } from "react";
import login from "../../../assets/login.jpg";
import Typo from "../../../shared/components/Typo";
import LoginWithEmailWhatsapp from "./LoginWithEmailWhatsapp";
import LoginWithEmailPassword from "./LoginWithEmailPassword";

const textStyle = {
  fontSize: {
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "14px",
  },
};

const Login = () => {
  const [loginType, setLoginType] = useState<"otp" | "password">("otp");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          p: { md: 4, lg: 5 },
        }}
      >
        <Box
          component="img"
          src={login}
          alt="login"
          sx={{
            width: { md: "90%", lg: "80%" },
            maxWidth: { md: 420, lg: 500 },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          minHeight: { xs: "100vh", md: "100vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // px: { xs: 2, sm: 3, md: 4, lg: 6 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            width: "100%",
            maxWidth: { xs: 350, sm: 400, md: 420, lg: 450 },
            mx: "auto",
          }}
        >
          <Typo
            variant="h5"
            text="React-Auth Business Center"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: {
                xs: "16px",
                sm: "20px",
                md: "28px",
                lg: "32px",
              },
            }}
          />

          {loginType === "otp" ? (
            <LoginWithEmailWhatsapp
              setLoginType={setLoginType}
              textStyle={textStyle}
            />
          ) : (
            <LoginWithEmailPassword
              setLoginType={setLoginType}
              textStyle={textStyle}
            />
          )}

          <Typo
            variant="body2"
            text="New to ipShopy? Create account"
            sx={{
              textAlign: "center",
              ...textStyle,
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;