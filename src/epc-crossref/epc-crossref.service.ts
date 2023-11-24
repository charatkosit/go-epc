import { Injectable } from '@nestjs/common';
import { CreateEpcCrossrefDto } from './dto/create-epc-crossref.dto';
import { UpdateEpcCrossrefDto } from './dto/update-epc-crossref.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EpcCrossref } from './entities/epc-crossref.entity';

@Injectable()
export class EpcCrossrefService {

  constructor(
    @InjectRepository(EpcCrossref)
    private epcCrossrefRepository: Repository<EpcCrossref>,
  ) { }

  create(createEpcCrossrefDto: CreateEpcCrossrefDto) {
    return 'This action adds a new epcCrossref';
  }

  findAll() {
    return `This action returns all epcCrossref`;
  }

  findOne(id: number) {
    return `This action returns a #${id} epcCrossref`;
  }

  update(id: number, updateEpcCrossrefDto: UpdateEpcCrossrefDto) {
    return `This action updates a #${id} epcCrossref`;
  }

  remove(id: number) {
    return `This action removes a #${id} epcCrossref`;
  }

  async findBySearch(crf_partid: string): Promise<any> {
    const sql = `select * from epc_crossref where crf_partid = "${crf_partid}" limit 100 `;
    return await this.epcCrossrefRepository.query(sql);
  }

  // async findAll_() {
  //   const data = await this.epcRepository.find({ select: ['epc_partid', 'epc_partdesc'] })
  //   if (!data) {
  //     throw new NotFoundException('ไม่พบคำที่ค้นหา');
  //   }
  //   return data;
  // }
}
