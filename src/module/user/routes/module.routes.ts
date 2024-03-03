import { Router } from 'express';
import sessionsRouter from './user.routes/userSession.routes';
import createUsersRouter from './user.routes/createUser.routes';
import globalMiddlewareAuthentication from '../../../global/middleware/authentication';
import updateUsersRouter from './user.routes/userUpdate.routes';
import changeUserPasswordRouter from './user.routes/changeUserPassword.routes';


const userModuleRoutes = Router();

userModuleRoutes.use(sessionsRouter)
userModuleRoutes.use(createUsersRouter)
/*
check if it is possible to add a group like:
update and change password belong to update groupe so we add a prefix for bouth 
*/
userModuleRoutes.use(globalMiddlewareAuthentication,updateUsersRouter)
userModuleRoutes.use(globalMiddlewareAuthentication,changeUserPasswordRouter)


export default userModuleRoutes;