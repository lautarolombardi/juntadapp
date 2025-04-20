import { ENTITIES } from "src/common/constants/entities.constants";
import { Match } from "src/matches/entities/match.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity(ENTITIES.TEAMS)
export class Team {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  number: number;

  @Column()
  score: number;

  @Column()
  result: string;

  @ManyToOne(() => Match)
  match: Match;
}
