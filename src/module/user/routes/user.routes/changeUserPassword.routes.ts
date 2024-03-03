import { Router } from 'express';
import ChangePasswordService from '../../service/changePassword.service';

const changeUserPasswordRouter = Router();

changeUserPasswordRouter.patch('/changePassword/', async (req, res) => {
    const {oldPassword, confirmOldPassword , email, newPassword, confirmNewPassword} = req.body

    console.log(req.body)
    try {

      if(oldPassword !== confirmOldPassword ) throw new Error("Password doesn't match")
      if(newPassword !== confirmNewPassword ) throw new Error("New Password must match")
      const changeUserPassword = new ChangePasswordService();

      const user: any = await changeUserPassword.execute({email, oldPassword, newPassword});
      if(typeof user === "string"){
        throw new Error(user)
      }
      return res.json("password changed successfully");
    } catch (err:any) {
      return res.status(400).json({ error: err.message });
    }
  });

  export default changeUserPasswordRouter;