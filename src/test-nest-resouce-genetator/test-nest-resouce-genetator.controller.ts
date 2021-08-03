import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestNestResouceGenetatorService } from './test-nest-resouce-genetator.service';
import { CreateTestNestResouceGenetatorDto } from './dto/create-test-nest-resouce-genetator.dto';
import { UpdateTestNestResouceGenetatorDto } from './dto/update-test-nest-resouce-genetator.dto';

@Controller('test-nest-resouce-genetator')
export class TestNestResouceGenetatorController {
  constructor(private readonly testNestResouceGenetatorService: TestNestResouceGenetatorService) {}

  @Post()
  create(@Body() createTestNestResouceGenetatorDto: CreateTestNestResouceGenetatorDto) {
    return this.testNestResouceGenetatorService.create(createTestNestResouceGenetatorDto);
  }

  @Get()
  findAll() {
    return this.testNestResouceGenetatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testNestResouceGenetatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestNestResouceGenetatorDto: UpdateTestNestResouceGenetatorDto) {
    return this.testNestResouceGenetatorService.update(+id, updateTestNestResouceGenetatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testNestResouceGenetatorService.remove(+id);
  }
}
