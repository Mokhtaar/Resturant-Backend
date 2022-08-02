import { OrderLine } from './OrderLine';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany
} from "typeorm";

@Entity()
export class Order extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mobileNum: number;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column()
  orderNumber: number;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", onUpdate: "current_timestamp" })
  updatedAt: Date;

  @OneToMany(() => OrderLine, (orderline) => orderline.order)
  orderlines: OrderLine[];
}
