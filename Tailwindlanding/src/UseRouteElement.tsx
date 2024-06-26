import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";

export default function UseRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return routeElement;
}
