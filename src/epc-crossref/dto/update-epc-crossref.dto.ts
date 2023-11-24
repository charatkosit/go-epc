import { PartialType } from '@nestjs/mapped-types';
import { CreateEpcCrossrefDto } from './create-epc-crossref.dto';

export class UpdateEpcCrossrefDto extends PartialType(CreateEpcCrossrefDto) {}
