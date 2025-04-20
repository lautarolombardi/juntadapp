import { Module } from '@nestjs/common';
import { MatchesPlayersService } from './matches_players.service';
import { MatchesPlayersController } from './matches_players.controller';

@Module({
  controllers: [MatchesPlayersController],
  providers: [MatchesPlayersService],
})
export class MatchesPlayersModule {}
