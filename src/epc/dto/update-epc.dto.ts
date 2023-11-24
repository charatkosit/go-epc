import { PartialType } from '@nestjs/mapped-types';
import { CreateEpcDto } from './create-epc.dto';

export class UpdateEpcDto extends PartialType(CreateEpcDto) {}
