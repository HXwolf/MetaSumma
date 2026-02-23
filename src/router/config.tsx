import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Resonance from "../pages/resonance/page";
import Vibration from "../pages/vibration/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resonance",
    element: <Resonance />,
  },
  {
    path: "/vibration",
    element: <Vibration />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
