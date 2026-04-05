import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import { CreateAccount, ForgotPassword, Login, OtpVerification } from "../../features/auth/pages";
import { About, Contact, Home } from "../../features/dashboard/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        index: true,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "otp-verification",
        element: <OtpVerification />,
      },
      {
        path: "create-account",
        element: <CreateAccount />,
      },
      {
        path: "*",
        element: <p>404 Error- Nothing here...</p>,
      },
    ],
  },
    {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "*",
        element: <p>404 Error- Nothing here...</p>,
      },
    ],
  },
 
]);

export default router;