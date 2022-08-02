import  { Category }  from './entity/Category';
import {Order} from './entity/Order'
import { Product } from './entity/Product';
import { OrderLine } from './entity/OrderLine';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from "dotenv";


config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Category, Order, Product, OrderLine],
    migrations: [],
    subscribers: [],
})
