import { createBrowserRouter } from "react-router-dom";
import LandingPage from "src/pages/LandingPage";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default routerList;
