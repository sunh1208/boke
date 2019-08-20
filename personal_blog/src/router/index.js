import Login from '../views/page/user/login';
import Register from '../views/page/user/register';
let routes={
    router:[
        {
            path:'/login',
            component:Login 
        },{
            path:'/register',
            component:Register 
        }
    ]
}
export default routes;