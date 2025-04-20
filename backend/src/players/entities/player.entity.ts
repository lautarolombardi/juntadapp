import { ENTITIES } from "src/common/constants/entities.constants";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity(ENTITIES.PLAYERS)
export class Player {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  nickname: string;

  @ManyToOne(() => User)
  user: User;
}
