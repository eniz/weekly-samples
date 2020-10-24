import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/*
* An entity is a class that maps to a particular database table. In this case, the product table.
*/
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
}