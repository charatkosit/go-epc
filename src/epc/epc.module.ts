import { Module } from '@nestjs/common';
import { EpcService } from './epc.service';
import { EpcController } from './epc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Epc } from './entities/epc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Epc])],
  controllers: [EpcController],
  providers: [EpcService],
})
export class EpcModule {}
