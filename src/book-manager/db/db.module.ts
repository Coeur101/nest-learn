import { DynamicModule, Module } from '@nestjs/common';
import { DbService } from './db.service';
export interface DbModuleOptions {
  path?: string
}

@Module({})
export class DbModule {
  static register(option: DbModuleOptions): DynamicModule {
    // 动态传入一个json的path路径，然后再动态的provider注入到Dbservice
    return {
      module: DbModule,
      providers: [{
        provide: "OPTION",
        useValue: option
      }, DbService],
      exports: [DbService]
    }
  }
}
