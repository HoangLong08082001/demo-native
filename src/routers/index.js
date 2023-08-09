import Home from "../pages/Home";
import Review from "../pages/Reviews";
import More from "../pages/More";
import Details from "../pages/Details";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/review", component: Review },
  { path: "/more-summer", component: More },
  { path: "/details", component: Details },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
