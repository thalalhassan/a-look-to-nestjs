import { Injectable } from '@nestjs/common';
import { CreateTestNestResouceGenetatorDto } from './dto/create-test-nest-resouce-genetator.dto';
import { UpdateTestNestResouceGenetatorDto } from './dto/update-test-nest-resouce-genetator.dto';

@Injectable()
export class TestNestResouceGenetatorService {
  create(createTestNestResouceGenetatorDto: CreateTestNestResouceGenetatorDto) {
    return 'This action adds a new testNestResouceGenetator';
  }

  findAll() {
    return `This action returns all testNestResouceGenetator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testNestResouceGenetator`;
  }

  update(id: number, updateTestNestResouceGenetatorDto: UpdateTestNestResouceGenetatorDto) {
    return `This action updates a #${id} testNestResouceGenetator`;
  }

  remove(id: number) {
    return `This action removes a #${id} testNestResouceGenetator`;
  }
}
