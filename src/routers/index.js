import Home from '../pages/Home';
import Review from '../pages/Reviews'
const publicRoutes=[
    {path:'/',component:Home},
    {path:'/review',component:Review}
]
const privateRoutes=[

]

export {publicRoutes,privateRoutes}