// import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import {requestSocialUserDTO, responseSocialUserDTO} from '../dto/socialUser.dto';

import userRepository from '../repository/socialUser.repository';



class CreateSocialUserService {
  public async execute(body: requestSocialUserDTO): Promise<responseSocialUserDTO > {
    try{

    const repository = new userRepository()
    if(!body?.email){
      throw new Error('Missing Email');
    }
    const checkUsersExists = await repository.findOneByEmail(body?.email);

    if (checkUsersExists) {
      throw new Error('Email address already exists');
    }
    const dbUser:responseSocialUserDTO | null =  await repository.createUser({
      ...body,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deleted:false
    });
    if(!dbUser) throw new Error("User could not be created")
    const formatedUser:responseSocialUserDTO =  {
        username: dbUser?.username,
        birthDay: dbUser?.birthDay,
        email:dbUser?.email,
        style: dbUser?.style,
        provider: dbUser.provider,
        geoLocation: dbUser.geoLocation
    }
    return formatedUser;
    } catch(e:any){
        throw new Error(e)
    }

  }
}

export default CreateSocialUserService;