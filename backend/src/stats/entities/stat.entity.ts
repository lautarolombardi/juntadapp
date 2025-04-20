import { ENTITIES } from "src/common/constants/entities.constants";
import { Game } from "src/games/entities/game.entity";
import { Player } from "src/players/entities/player.entity";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from "typeorm";

@Entity(ENTITIES.STATS)
export class Stat {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  matches_played: number;

  @Column()
  wins: number;

  @Column()
  losses: number;

  @Column()
  total_score: number;

  @Column()
  ranking: number;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at: Timestamp;

  @ManyToOne(() => Player)
  player: Player;

  @ManyToOne(() => Game)
  game: Game;
}
