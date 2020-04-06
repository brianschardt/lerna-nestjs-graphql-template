import { Module, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { TestService } from './test.service';
import { ENV } from '../shared/configs';

if (!ENV.JWT_SECRET) {
  const message =
    'Environment Variable JWT_SECRET not set, authentication wont work for Iris Common Package';
  Logger.error(message, 'Iris Common Package');
  throw new Error(message);
}
@Module({
  providers: [UserService, TestService],
  exports: [UserService, TestService],
})
export class IrisServiceModule {}
