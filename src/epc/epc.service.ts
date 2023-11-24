import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpcDto } from './dto/create-epc.dto';
import { UpdateEpcDto } from './dto/update-epc.dto';
import { Epc } from './entities/epc.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EpcService {

  constructor(@InjectRepository(Epc)
  private epcRepository: Repository<Epc>) {

  }

  create(createEpcDto: CreateEpcDto) {
    return 'This action adds a new epc';
  }

  async findAll() {
    const data = await this.epcRepository.find({ select: ['epc_partid', 'epc_partdesc'] })
    if (!data) {
      throw new NotFoundException('ไม่พบคำที่ค้นหา');
    }
    return data;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} epc`;
  // }
  async findOne(id: string) {
    const data = await this.epcRepository.findOne({ where: { epc_partid: id } })
    if (!data) {
      throw new NotFoundException('ไม่พบคำที่ค้นหา');
    }
    return data;
  }

  update(id: number, updateEpcDto: UpdateEpcDto) {
    return `This action updates a #${id} epc`;
  }

  remove(id: number) {
    return `This action removes a #${id} epc`;
  }
}
