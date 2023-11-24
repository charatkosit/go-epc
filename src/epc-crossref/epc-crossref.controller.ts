import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { EpcCrossrefService } from './epc-crossref.service';
import { CreateEpcCrossrefDto } from './dto/create-epc-crossref.dto';
import { UpdateEpcCrossrefDto } from './dto/update-epc-crossref.dto';

@Controller(
  {
    version: '1',
    path: 'epc-crossref'
  }
)

export class EpcCrossrefController {
  constructor(private readonly epcCrossrefService: EpcCrossrefService) {}

  @Post()
  create(@Body() createEpcCrossrefDto: CreateEpcCrossrefDto) {
    return this.epcCrossrefService.create(createEpcCrossrefDto);
  }

  @Get()
  findAll() {
    return this.epcCrossrefService.findAll();
  }

  @Get('search')
  async findBySearch(@Query() query: any) {
    const data = await this.epcCrossrefService.findBySearch(query.crf_partid);


    const counter:number = Object.keys(data).length

    let code:number;
    
    let message:string;


    console.log (counter);
    if (counter == 0) {
        code =HttpStatus.NOT_FOUND;
        message='Not Found';  
    }else {
        code =HttpStatus.OK;
        message='OK';
    }
    
    return {
      code: code,
      message: message,
      resultFound: counter,
      data: data
    } 
        
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epcCrossrefService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpcCrossrefDto: UpdateEpcCrossrefDto) {
    return this.epcCrossrefService.update(+id, updateEpcCrossrefDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.epcCrossrefService.remove(+id);
  }
}
