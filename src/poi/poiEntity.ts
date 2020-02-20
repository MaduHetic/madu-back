import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
  })
  name: string;

  @Column({
    length: 50,
  })
  price: string;

  @Column({
    type: 'longtext',
  })
  description: string;

  @Column({
    length: 150,
  })
  address: string;

  @Column({
    length: 50,
  })
  city: string;

  @Column({
    length: 6,
  })
  postalCode: string;

  @Column({
    length: 50,
    nullable: true,
    default: null,
  })
  type: string;

  @Column({
    length: 100,
    nullable: true,
    default: null,
  })
  long: string;

  @Column({
    length: 100,
    nullable: true,
    default: null,
  })
  lat: string;

  @Column({
    nullable: true,
    default: null,
  })
  greenScore: number;

  @Column({
    nullable: true,
    default: null,
  })
  logo: string;

  @CreateDateColumn()
  dateCreate: string;
}
