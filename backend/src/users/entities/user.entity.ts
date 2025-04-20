import { ENTITIES } from "src/common/constants/entities.constants";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity(ENTITIES.USERS)
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  avatar: string;

  @Column()
  role: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Timestamp;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deleted_at: Timestamp | null;
}
