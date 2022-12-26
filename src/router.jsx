import WelComePage from "./pages/welcomePage";
import LogInPage from "./pages/logInPage";
import DashboardPage from "./pages/dashboardPage";

const routes = [
  {
    path: "/",
    name: "WelComePage",
    component: WelComePage,
    isPrivate: false,
    layout: "public",
  },
  {
    path: "/signin",
    name: "LogInPage",
    component: LogInPage,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
    isPrivate: true,
    layout: "private",
  },
];

export default routes;
