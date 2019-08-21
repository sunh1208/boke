import Login from '../views/page/user/login';
import Register from '../views/page/user/register';
import Home from "../views/page/home/index.js";
import blogList from "../views/page/blogList/blogList";
import blogParticulars from "../views/page/blogparticulars/blogparticulars"
import blogContent from "../views/page/blogContent/content";
let routes = {
    router: [
        {
            path: '/login',
            component: Login
        }, {
            path: '/register',
            component: Register
        }, {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "/home/blogList",
                    component: blogList,
                },
                {
                    path: "/home/blogParticulars/:id",
                    component: blogParticulars,
                }, {
                    path: "/home/blogContent",
                    component: blogContent,
                }
            ]
        }
    ]
}
export default routes;