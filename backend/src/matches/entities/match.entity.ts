import { ENTITIES } from "src/common/constants/entities.constants";
import { Game } from "src/games/entities/game.entity";
import { Player } from "src/players/entities/player.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity(ENTITIES.MATCHES)
export class Match {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  code: number;

  @Column()
  state: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Timestamp;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleted_at: Timestamp | null;

  @ManyToOne(() => Game)
  game: Game;

  @ManyToOne(() => Player)
  created_by: Player;
}
