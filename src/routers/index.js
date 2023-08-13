import Home from '../pages/Home';
import Review from '../pages/Reviews'
import Login from '../pages/Login';
import Register from '../pages/Register';
const publicRoutes=[
    {path:'/',component:Home},
    {path:'/review',component:Review},
    {path:'/login',component:Login},
    {path:'/register',component:Register}
]
const privateRoutes=[

]

export {publicRoutes,privateRoutes}