import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TestService } from './test.service';
@Module({
  providers: [UserService, TestService],
  exports: [UserService, TestService],
})
export class IrisServiceModule {}
