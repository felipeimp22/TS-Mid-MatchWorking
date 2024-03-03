import userRepository from '../repository/socialUser.repository';
import { requestSocialUserDTO, responseSocialUserDTO } from '../dto/socialUser.dto';


class UpdateUserService {
  public async execute(id:string, body: requestSocialUserDTO): Promise<responseSocialUserDTO | string> {
    try{
    const repository = new userRepository()

    const user = await repository.updateUserById(id,{...body});
    if(!user) throw new Error("user doesn't exists")
    const formatedUser:responseSocialUserDTO =  {...user}

    return formatedUser
}catch(e:any){
    return e.message
}
  }

}
export default UpdateUserService;