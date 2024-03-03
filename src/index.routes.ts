import { Router } from 'express';
import userModuleRoutes from './module/user/routes/module.routes';
import userSocialModuleRoutes from './module/socialUser/routes/module.routes';

const routes = Router();

routes.get('/', (_,res)=>res.json("Hello world!!!"));
routes.use('/user/', userModuleRoutes)
routes.use('/socialUser/', userSocialModuleRoutes)



export default routes;