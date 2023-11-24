/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { environment } from 'src/environments/environment'


export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'mysql',
    host: environment.dbUrl,
    port: environment.port,
    username: environment.dbUsername,
    password: environment.dbPassword,
    database: environment.dbName,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: environment.synchronize,
}