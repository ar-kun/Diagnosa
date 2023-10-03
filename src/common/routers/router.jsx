import { RouterProvider } from "react-router-dom";
import RouterList from "./router-list.jsx";

export default function Router() {
  return (
    <>
      <RouterProvider router={RouterList} />
    </>
  );
}
