import userRepository from '../repository/user.repository';
import { responseUserDTO } from '../dto/user.dto';
import { hash, compareSync } from 'bcryptjs';

interface Request {
    email: string;
    oldPassword: string;
    newPassword: string
}
class ChangePasswordService {
  public async execute(params:Request): Promise<responseUserDTO | string> {
    const {email, newPassword, oldPassword} = params
        try{
            
            if(oldPassword === newPassword) throw new Error("Passwords are the same")
            const repository = new userRepository()
            const getUser: responseUserDTO | null = await repository.findOneByEmail(email)
        
            if( !getUser || !getUser?.password) throw new Error("Password could not be changed")
            
            
            if(compareSync(oldPassword, getUser?.password) === false) throw new Error("Invalid Password")

            const formatedPassword = await hash(newPassword, 8);
            const user = await repository.changePasswordByEmail(email, formatedPassword);
            if(!user) throw new Error("user doesn't exists")
        
            return user
        }catch(e:any){
    return e.message
        }
    }
}
export default ChangePasswordService;