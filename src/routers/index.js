
import Home from '../pages/Home';
import Review from '../pages/Reviews'
import Login from '../pages/Login';
import Register from '../pages/Register';
import More from "../pages/More";
import Details from "../pages/Details";
const publicRoutes=[
    {path:'/',component:Home},
    {path:'/review',component:Review},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    { path: "/more-summer", component: More },
    { path: "/details", component: Details },
]
const privateRoutes=[
]




export { publicRoutes, privateRoutes };
