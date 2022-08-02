import { OrderLine } from "./OrderLine";
import { Category } from "./Category";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  popular: boolean;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", onUpdate: "current_timestamp" })
  updatedAt: Date;

  @ManyToOne(() => Category, category => category.products, { nullable: false, })
  category: Category;

  @OneToMany(() => OrderLine, orderline => orderline.product, { nullable: false, })
  orderlines: OrderLine[];
}
