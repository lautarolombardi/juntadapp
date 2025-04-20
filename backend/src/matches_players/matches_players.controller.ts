import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchesPlayersService } from './matches_players.service';
import { CreateMatchesPlayerDto } from './dto/create-matches_player.dto';
import { UpdateMatchesPlayerDto } from './dto/update-matches_player.dto';

@Controller('matches-players')
export class MatchesPlayersController {
  constructor(private readonly matchesPlayersService: MatchesPlayersService) {}

  @Post()
  create(@Body() createMatchesPlayerDto: CreateMatchesPlayerDto) {
    return this.matchesPlayersService.create(createMatchesPlayerDto);
  }

  @Get()
  findAll() {
    return this.matchesPlayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchesPlayersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchesPlayerDto: UpdateMatchesPlayerDto) {
    return this.matchesPlayersService.update(+id, updateMatchesPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchesPlayersService.remove(+id);
  }
}
