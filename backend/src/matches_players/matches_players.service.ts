import { Injectable } from '@nestjs/common';
import { CreateMatchesPlayerDto } from './dto/create-matches_player.dto';
import { UpdateMatchesPlayerDto } from './dto/update-matches_player.dto';

@Injectable()
export class MatchesPlayersService {
  create(createMatchesPlayerDto: CreateMatchesPlayerDto) {
    return 'This action adds a new matchesPlayer';
  }

  findAll() {
    return `This action returns all matchesPlayers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matchesPlayer`;
  }

  update(id: number, updateMatchesPlayerDto: UpdateMatchesPlayerDto) {
    return `This action updates a #${id} matchesPlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchesPlayer`;
  }
}
