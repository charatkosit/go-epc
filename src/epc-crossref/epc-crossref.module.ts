import { Module } from '@nestjs/common';
import { EpcCrossrefService } from './epc-crossref.service';
import { EpcCrossrefController } from './epc-crossref.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpcCrossref } from './entities/epc-crossref.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EpcCrossref])],
  controllers: [EpcCrossrefController],
  providers: [EpcCrossrefService],
})
export class EpcCrossrefModule {}
