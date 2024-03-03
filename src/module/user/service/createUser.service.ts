// import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import {requestUserDTO, responseUserDTO, } from '../dto/user.dto';
import userRepository from '../repository/user.repository';



class CreateUserService {
  public async execute(body: requestUserDTO): Promise<responseUserDTO> {
    try{
      console.log("USERRR", body)
      if(!body.password || !body.birthDay || !body.email){
        throw new Error('Informations is missing');
      }

    const repository = new userRepository()
    const checkUsersExists = await repository.findOneByEmail(body.email);

    if (checkUsersExists) {
      throw new Error('Email address already exists');
    }

    const hashedPassword = await hash(body.password, 8);
    const dbUser:responseUserDTO | null =  await repository.createUser({
      ...body,
      password: hashedPassword,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      deleted:false
    });
    if(!dbUser) throw new Error("User could not be created")
    const formatedUser:responseUserDTO =  {
        userName: dbUser.userName,
        name: dbUser.name,
        surname:dbUser.surname,
        birthDay: dbUser.birthDay,
        email: dbUser.email,
        style: dbUser.style,
        geoLocation: dbUser.geoLocation
    }
    return formatedUser;
    } catch(e:any){
        throw new Error(e)
    }

  }
}

export default CreateUserService;