import { Router } from 'express';
import CreateUserService from '../../service/createUser.service';
import { responseUserDTO } from '../../dto/user.dto';

const createUsersRouter = Router();
createUsersRouter.post('/create', async (req, res) => {
    try {
      const createUser = new CreateUserService();
      const user: responseUserDTO = await createUser.execute(req.body);
      delete user.password
      return res.json(user);
    } catch (err:any) {
      return res.status(400).json({ error: err.message });
    }
  });

  export default createUsersRouter;