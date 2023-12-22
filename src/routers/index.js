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
import Ticket from "../pages/Admin/Ticket";
import UpdateTour from "../pages/Admin/Tour/UpdateTour";
import DetailTour from "../pages/Admin/Tour/DetailTour";
import AddTicket from "../pages/Admin/Ticket/AddTicket";
import AddCustommer from "../pages/Admin/Custommer/AddCustommer";
import UserAdmin from "../pages/Admin/UserAdmin";
import BillDetail from "../pages/BillDetail";
import Confirm from "../pages/Confirm";
import Authentication from "../pages/Admin/Authentication";
import CheckAuthen from "../pages/Admin/Authentication/CheckAuthen";
import Discount from "../pages/Admin/Discount";
import AddDiscount from "../pages/Admin/Discount/AddDiscount";
import AddPosition from "../pages/Admin/Authentication/AddPosition";
import AddRule from "../pages/Admin/Authentication/AddRule";
import Statistical from "../pages/Statistical";
import BillManager from "../pages/Admin/BillManager";
import DetailBillManager from "../pages/Admin/BillManager/DetailBillManager";
const publicRoutes = [
  { path: "/login-user", component: Login },
  { path: "/register-user", component: Register },
  { path: "*", component: Error },
  { path: "/admin-login", component: LoginAdmin },
  { path: "/User/billdetail/:matour", component: BillDetail },
  { path: "/Confirm", component: Confirm },
  { path: "/", component: Home },
  { path: "/bill/:name/:id/:date/:giam", component: Bill },
  { path: "/review", component: Review },
  { path: "/more-summer", component: More },
  { path: "/details/:name/:id", component: Details },
  { path: "/more-summer/:nn", component: More },
  { path: "/User", component: User },
  { path: "/admin-home", component: HomeAdmin },
  { path: "/nhan-vien", component: Employee },
  { path: "/khach-hang", component: Custommer },
  { path: "/them-nhan-vien", component: AddEmployee },
  { path: "/sua-nhan-vien", component: UpdateEmployee },
  { path: "/chi-tiet-nhan-vien/:name/:id", component: DetailEmployee },
  { path: "/tour", component: Tour },
  { path: "/them-tour", component: AddTour },
  { path: "/sua-tour/:TenTour/:id", component: UpdateTour },
  { path: "/chi-tiet-tour", component: DetailTour },
  { path: "/phieu-dat-tour", component: Ticket },
  { path: "/them-phieu", component: AddTicket },
  { path: "/them-khach-hang", component: AddCustommer },
  { path: "/Information", component: UserAdmin },
  { path: "/hoa-don", component: BillManager },
  { path: "/phan-quyen", component: Authentication },
  { path: "/them-vi-tri", component: AddPosition },
  { path: "/them-quyen", component: AddRule },
  { path: "/kiem-tra-quyen", component: CheckAuthen },
  { path: "/giam-gia", component: Discount },
  { path: "/them-giam-gia", component: AddDiscount },
  { path: "/thong-ke", component: Statistical },
  { path: "/chi-tiet-hoadon/:id", component: DetailBillManager },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
