import { Module } from '@nestjs/common';
import { TestNestResouceGenetatorService } from './test-nest-resouce-genetator.service';
import { TestNestResouceGenetatorController } from './test-nest-resouce-genetator.controller';

@Module({
  controllers: [TestNestResouceGenetatorController],
  providers: [TestNestResouceGenetatorService]
})
export class TestNestResouceGenetatorModule {}
