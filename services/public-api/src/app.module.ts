import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { GraphqlModule } from './graphql/graphql.module';
import { ControllerModule } from './controllers/controller.module';
import { ENV } from './shared/configs';
import { IrisDBModule } from '@iris/common';
@Module({
  imports: [
    GraphqlModule,
    SharedModule,
    ControllerModule,
    IrisDBModule.forRoot({
      type: ENV.DATABASE_TYPE as any,
      host: ENV.DATABASE_HOST,
      port: ENV.DATABASE_PORT as any,
      username: ENV.DATABASE_USERNAME,
      password: ENV.DATABASE_PASSWORD,
      database: ENV.DATABASE_NAME,
      synchronize: false,
      dropSchema: false,
      logging: false,
    }),
  ],
})
export class AppModule {}
