import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/*
* An entity is a class that maps to a particular database table. In this case, the product table.
*/
@Entity('pokemon')
export class Pokemon extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 500, unique: true })
  name: string;

  @Column('varchar', { length: 500 })
  type: string;

  @Column('numeric')
  pokeDex: number;
}