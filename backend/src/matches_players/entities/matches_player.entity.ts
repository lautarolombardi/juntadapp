import { ENTITIES } from "src/common/constants/entities.constants";
import { Match } from "src/matches/entities/match.entity";
import { Player } from "src/players/entities/player.entity";
import { Team } from "src/teams/entities/team.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity(ENTITIES.MATCHES_PLAYERS)
export class MatchesPlayer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  result: string;

  @Column()
  player_score: number;

  @ManyToOne(() => Team, { nullable: true })
  team: Team;

  @ManyToOne(() => Player)
  player: Player;

  @ManyToOne(() => Match)
  match: Match;
}
