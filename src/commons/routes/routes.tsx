import React from "react";
import type { AppRoute } from "../types";

const Home = React.lazy(() => import("../../layouts/home/components"));
const Detail = React.lazy(() => import("../../layouts/detail/components"));

export const routes: Array<AppRoute> = [
  {
    id: "home",
    component: <Home />,
    path: "/",
  },
  {
    id: "detail",
    component: <Detail />,
    path: "/details/:id",
  },
  {
    id: "not-found",
    component: <div>Not found</div>,
    path: "*",
  },
];
