import { Test, TestingModule } from '@nestjs/testing';
import { ThirdclientsService } from './thirdclients.service';

describe('ThirdclientsService', () => {
  let service: ThirdclientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdclientsService],
    }).compile();

    service = module.get<ThirdclientsService>(ThirdclientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
