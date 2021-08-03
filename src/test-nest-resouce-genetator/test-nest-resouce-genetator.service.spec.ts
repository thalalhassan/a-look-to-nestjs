import { Test, TestingModule } from '@nestjs/testing';
import { TestNestResouceGenetatorService } from './test-nest-resouce-genetator.service';

describe('TestNestResouceGenetatorService', () => {
  let service: TestNestResouceGenetatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestNestResouceGenetatorService],
    }).compile();

    service = module.get<TestNestResouceGenetatorService>(TestNestResouceGenetatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
