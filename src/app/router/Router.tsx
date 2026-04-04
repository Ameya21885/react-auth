import { createBrowserRouter } from "react-router-dom";
import { Root, Home, About, Contact } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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