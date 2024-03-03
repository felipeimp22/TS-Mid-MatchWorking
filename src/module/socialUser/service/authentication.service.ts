// import { getRepository } from 'typeorm';
// import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../global/config/auth/auth';
import socialUserRepository from '../repository/socialUser.repository';
import {
  requestSocialUserDTO,
  responseSocialUserDTO,
} from '../dto/socialUser.dto';
import CreateSocialUserService from './createSocialUser.service';
import axios from 'axios';

interface Request extends requestSocialUserDTO {
  providerToken: string;
  provider: string
}
interface Response {
  // user: any;
  provider:string;
  token: string;
}
class AuthenticateSocialUserService {
  public async execute(body: Request): Promise<Response > {
    try {
      const repository = new socialUserRepository();
      let user: responseSocialUserDTO | null = null
      if(body.provider.toUpperCase() === "SPOTIFY"){
       const getUserSpotiFy = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            'Authorization': `Bearer ${body.providerToken}`
          }
        })
        const formatedUserSpotify = getUserSpotiFy.data
        //ensure that you are seeking for email on formatedUser.
        user = await repository.findOneByEmail(formatedUserSpotify.email );

        if(!user || user === null){
          const createUserClass = new CreateSocialUserService();
          const createUser = await createUserClass.execute(body);
          if (typeof createUser === 'string') throw new Error("User Can't be created");
          user = createUser;
        }
      }else{
        user = await repository.findOneByEmail(
          body.email,
          );
        }
        
        /**
       * To do:
       * Validate if we will have the body with all informations or only token otherwise we need make a request for the user Infos to create on DB
       *
       */


      /**
       * To do:
       * Validate if provider token is right
       * body.providerToken
       *
       */

      if(!user || user === null) throw new Error("something went wrong")

      const { secret, expiresIn } = authConfig.jwt;
      const token = sign(
        {
          user: user?._id,
          name: user?.username,
          email: user?.email,
          syle: user?.style,
          provider: user?.provider,
        },
        secret,
        {
          subject: `${user?._id}`,
          expiresIn,
        },
      );
      return {
        provider: body.provider,
        token: token,
      };
    } catch (e:any) {
      return e.message
    }
  }
}
export default AuthenticateSocialUserService;
