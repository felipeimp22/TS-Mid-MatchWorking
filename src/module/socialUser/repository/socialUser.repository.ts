import { responseSocialUserDTO } from "../dto/socialUser.dto";
import SocialUser from "../models/SocialUser"

export default class socialUserRepository {
    private query = SocialUser;

    public async findOneByEmail(email:string): Promise<responseSocialUserDTO | null>{
        const response = await this.query.findOne({"email": email})
        return response? response: null
    }
    public async createUser(body:any){
        const response = await this.query.create(body)
        return response? response: null
    }
    public async updateUserById(id:any,body:any){
        const response = await this.query.findByIdAndUpdate(id,body)
        return response? response: null
    }
    public async changePasswordByEmail(email:any,newPassword:any){
        const response = await this.query.findOneAndUpdate(email,{"password": newPassword})
        return response? response: null
    }
}

