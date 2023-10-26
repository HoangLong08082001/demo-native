import Home from "../pages/Home";
import Review from "../pages/Reviews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import More from "../pages/More";
import Details from "../pages/Details";
import LoginAdmin from "../pages/Admin/LoginAdmin/LoginAdmin";
import HomeAdmin from "../pages/Admin/HomeAdmin/HomeAdmin";
import Error from "../pages/Error";
import Employee from "../pages/Admin/Employee";
import AddEmployee from "../pages/Admin/Employee/AddEmployee";
import Bill from "../pages/Bill";
import UpdateEmployee from "../pages/Admin/Employee/UpdateEmployee";
import DetailEmployee from "../pages/Admin/Employee/DetailEmployee";
import Custommer from "../pages/Admin/Custommer";
import Tour from "../pages/Admin/Tour";
import AddTour from "../pages/Admin/Tour/AddTour";
import User from "../pages/User";
const publicRoutes = [
  { path: "/login-user", component: Login },
  { path: "/register-user", component: Register },
  { path: "*", component: Error },
  { path: "/admin-login", component: LoginAdmin },
  { path: "/", component: Home },
  { path: "/bill", component: Bill },
  { path: "/review", component: Review },
  { path: "/more-summer", component: More },
  { path: "/details/:id", component: Details },
  { path: "/more-summer/:nn", component: More },
  { path: "/User", component: User },
  { path: "/admin-home", component: HomeAdmin },
  { path: "/employee", component: Employee },
  { path: "/custommer", component: Custommer },
  { path: "/AddEmployee", component: AddEmployee },
  { path: "/updateEmployee", component: UpdateEmployee },
  { path: "/detailEmployee", component: DetailEmployee },
  { path: "/tour", component: Tour },
  { path: "/AddTour", component: AddTour },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
