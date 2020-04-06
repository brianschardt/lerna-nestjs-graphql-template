import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserEntity } from '../db';
import { UserCreateData } from '../shared/types';

@Injectable()
export class UserService {
  async read(email: string) {
    const user = await UserEntity.findOne({
      where: { email },
    });
    return user;
  }

  async login(email: string, password: string) {
    const user = await UserEntity.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email/password');
    }
    return {
      token: user.token,
      type: 'Bearer',
    };
  }

  async create(data: UserCreateData) {
    const { email } = data;
    let user: any = await UserEntity.findOne({ where: { email } });
    if (user) {
      throw new Error('User already exists');
    }
    user = UserEntity.create(data);
    await user.save();
    return user;
  }
}
