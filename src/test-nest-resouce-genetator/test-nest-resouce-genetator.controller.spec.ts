import { Test, TestingModule } from '@nestjs/testing';
import { TestNestResouceGenetatorController } from './test-nest-resouce-genetator.controller';
import { TestNestResouceGenetatorService } from './test-nest-resouce-genetator.service';

describe('TestNestResouceGenetatorController', () => {
  let controller: TestNestResouceGenetatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestNestResouceGenetatorController],
      providers: [TestNestResouceGenetatorService],
    }).compile();

    controller = module.get<TestNestResouceGenetatorController>(TestNestResouceGenetatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
