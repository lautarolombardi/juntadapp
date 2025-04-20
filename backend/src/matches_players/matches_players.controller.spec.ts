import { Test, TestingModule } from '@nestjs/testing';
import { MatchesPlayersController } from './matches_players.controller';
import { MatchesPlayersService } from './matches_players.service';

describe('MatchesPlayersController', () => {
  let controller: MatchesPlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchesPlayersController],
      providers: [MatchesPlayersService],
    }).compile();

    controller = module.get<MatchesPlayersController>(MatchesPlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
