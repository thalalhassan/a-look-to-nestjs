import { PartialType } from '@nestjs/swagger';
import { CreateTestNestResouceGenetatorDto } from './create-test-nest-resouce-genetator.dto';

export class UpdateTestNestResouceGenetatorDto extends PartialType(CreateTestNestResouceGenetatorDto) {}
