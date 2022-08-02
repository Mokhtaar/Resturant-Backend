import { Product } from './Product';
import { Order } from './Order';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class OrderLine extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", onUpdate: "current_timestamp" })
  updatedAt: Date;

  @ManyToOne(() => Order, (order) => order.orderlines, { nullable: false,})
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderlines, { nullable: false,})
  product: Product;
}
