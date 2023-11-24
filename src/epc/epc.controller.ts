import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EpcService } from './epc.service';
import { CreateEpcDto } from './dto/create-epc.dto';
import { UpdateEpcDto } from './dto/update-epc.dto';

@Controller(
  {
    version: '1',
    path: 'epc'
  }
)

export class EpcController {
  constructor(private readonly epcService: EpcService) {}

  @Post()
  create(@Body() createEpcDto: CreateEpcDto) {
    return this.epcService.create(createEpcDto);
  }

  @Get()
  findAll() {
    // return "hello world"
    return this.epcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epcService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpcDto: UpdateEpcDto) {
    return this.epcService.update(+id, updateEpcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.epcService.remove(+id);
  }
}
