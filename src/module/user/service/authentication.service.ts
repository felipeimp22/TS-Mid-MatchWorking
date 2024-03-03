// import { getRepository } from 'typeorm';
// import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import authConfig from '../../../global/config/auth/auth';
import userRepository from '../repository/user.repository';
import { responseUserDTO } from '../dto/user.dto';

interface Request {
  email: string;
  password: string;
}
interface Response {
  user: any;
  token: string;
}
class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {

    const repository = new userRepository()

    const user: responseUserDTO | null = await repository.findOneByEmail(email);
    if (!user || !user?.password) {
      throw new Error('invalid email or password');
    }

    const passWordMatched = await compare(password, user.password);
    if (!passWordMatched) {
      throw new Error('invalid email or password');
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({
      user: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      birthDay: user.birthDay

    }, secret, {
      subject: `${user._id}`,
      expiresIn,
    });
    return {
      "user": user.email,
      "token": token
    }
  }
}
export default AuthenticateUserService;