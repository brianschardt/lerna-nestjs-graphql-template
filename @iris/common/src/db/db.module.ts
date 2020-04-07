import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IrisDBModuleOptions } from './db.type';

@Module({})
export class IrisDBModule {
  static forRoot(options: IrisDBModuleOptions) {
    return {
      module: IrisDBModule,
      imports: [
        TypeOrmModule.forRoot({
          type: options.type as any,
          host: options.host,
          port: options.port as any,
          username: options.username,
          password: options.password,
          database: options.database,
          synchronize: options.synchronize,
          dropSchema: options.dropSchema,
          logging: options.logging,
          entities: [`${__dirname}/entities/*.entity.*`],
          migrations: [`${__dirname}/migrations/*`],
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
