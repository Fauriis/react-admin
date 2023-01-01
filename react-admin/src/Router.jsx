import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

function Router() {
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Router;
