import { Module } from '@nestjs/common';

// Install the TypeORM module for creating a connection database
import { TypeOrmModule} from "@nestjs/typeorm";
import { join } from 'path';
import { ProductModule } from './product/product.module';

// TODO: Get from env variable
const DB_USER = 'root';
const DB_PASSWORD = 'password';
/*
 Modules are TypeScript files decorated with @Module,
 providing the metadata that Nest.js uses to organize the application structure.
*/
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: DB_USER,
      password: DB_PASSWORD,
      database: 'test_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
