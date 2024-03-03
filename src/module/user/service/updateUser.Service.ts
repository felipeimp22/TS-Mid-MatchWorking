import userRepository from '../repository/user.repository';
import { requestUserDTO, responseUserDTO } from '../dto/user.dto';

class UpdateUserService {
  public async execute(id:string, body: requestUserDTO): Promise<responseUserDTO | string> {
    try{
    const repository = new userRepository()

    const user = await repository.updateUserById(id,{...body});
    if(!user) throw new Error("user doesn't exists")
    const formatedUser:responseUserDTO =  {...user}

    return formatedUser
}catch(e:any){
    return e.message
}
  }

}
export default UpdateUserService;