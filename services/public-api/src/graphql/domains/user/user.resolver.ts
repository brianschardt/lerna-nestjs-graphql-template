import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { UserCreateInput, LoginInput } from '../../../shared/types';
import { UserService, UserEntity} from '@iris/common';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query()
  @UseGuards(new AuthGuard())
  async whoami(@Context('user') user) {
    const { email } = user;
    return UserEntity.findOne({ email });
  }

  @Query()
  async test() {
    return 'testaksdjfalhds';
  }
  @Query()
  async login(@Args('input') input: LoginInput) {
    return await this.userService.login(input.email, input.password);
  }

  @Mutation()
  async userCreate(@Args('input') input: UserCreateInput) {
    const user = await this.userService.create({
      email: input.email,
      password: input.password,
      firstName: input.firstName,
      lastName: input.lastName,
    });

    return { user };
  }
}
