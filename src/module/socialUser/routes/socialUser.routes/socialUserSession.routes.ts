import { Router } from 'express';
import AuthenticateSocialUserService from '../../service/authentication.service';
import { requestSocialUserDTO } from '../../dto/socialUser.dto';

const sessionsRouter = Router();
interface User {
  provider:string;
  token: any
}
interface bodyRequest extends requestSocialUserDTO{
  providerToken: string
}
sessionsRouter.post('/session', async (req, res) => {
  try {
    const body:bodyRequest = req.body;
    
    const authenticateSocialUserService = new AuthenticateSocialUserService();

    const socialUser: User   = await authenticateSocialUserService.execute(body);

    return res.json(socialUser);
  } catch (err:any) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;