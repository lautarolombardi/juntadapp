import { Test, TestingModule } from '@nestjs/testing';
import { MatchesPlayersService } from './matches_players.service';

describe('MatchesPlayersService', () => {
  let service: MatchesPlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchesPlayersService],
    }).compile();

    service = module.get<MatchesPlayersService>(MatchesPlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
