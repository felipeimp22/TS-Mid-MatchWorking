import { Router } from 'express';
import sessionsRouter from './socialUser.routes/socialUserSession.routes';
import globalMiddlewareAuthentication from '../../../global/middleware/authentication';
import updateSocialUsersRouter from './socialUser.routes/socialUserUpdate.routes';
import createSocialUsersRouter from './socialUser.routes/createSocialUser.routes';


const userSocialModuleRoutes = Router();

userSocialModuleRoutes.use(sessionsRouter)
userSocialModuleRoutes.use(createSocialUsersRouter)
/*
check if it is possible to add a group like:
update and change password belong to update groupe so we add a prefix for bouth 
*/
userSocialModuleRoutes.use(globalMiddlewareAuthentication,updateSocialUsersRouter)


export default userSocialModuleRoutes;