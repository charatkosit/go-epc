import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { EpcModule } from './epc/epc.module';
import { EpcCrossrefModule } from './epc-crossref/epc-crossref.module';
import { ImgModule } from './img/img.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    EpcModule,
    EpcCrossrefModule,
    ImgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
