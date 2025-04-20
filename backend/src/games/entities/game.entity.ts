import { ENTITIES } from "src/common/constants/entities.constants";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity(ENTITIES.GAMES)
export class Game {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column()
  rules: string;

  @Column()
  in_teams: boolean;

  @Column({ nullable: true })
  max_teams: number;

  @Column({ nullable: true })
  max_players: number;

  @Column({ nullable: true })
  max_team_players: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Timestamp;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleted_at: Timestamp | null;
}
