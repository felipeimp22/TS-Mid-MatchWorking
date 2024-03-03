import { Request, Response, Router } from 'express';
import { responseUserDTO } from '../../dto/user.dto';
import UpdateUserService from '../../service/updateUser.Service';

const updateUsersRouter = Router();
updateUsersRouter.put('/update/:id', async (req:Request, res:Response) => {
    const {id} = req.params
    try {
      const updateUser = new UpdateUserService();
      if(req.body.password) delete req.body.password
      const user: responseUserDTO | string = await updateUser.execute(id,req.body);
      if(typeof user === "string"){
        throw new Error(user)
      }
      return res.json(user);
    } catch (err:any) {
      return res.status(400).json({ error: err.message });
    }
  });

  export default updateUsersRouter;