export interface IrisDBModuleOptions {
  type: string;
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
  dropSchema: boolean;
  logging: boolean;
}
