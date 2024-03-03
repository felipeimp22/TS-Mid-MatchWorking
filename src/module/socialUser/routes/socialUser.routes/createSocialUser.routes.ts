import { Router } from 'express';
import CreateSocialUserService from '../../service/createSocialUser.service';
import { responseSocialUserDTO } from '../../dto/socialUser.dto';

const createSocialUsersRouter = Router();
createSocialUsersRouter.post('/create', async (req, res) => {
    try {
      const createUser = new CreateSocialUserService();
      const user: responseSocialUserDTO = await createUser.execute(req.body);
      
      return res.json(user);
    } catch (err:any) {
      return res.status(400).json({ error: err.message });
    }
  });

  export default createSocialUsersRouter;