import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  address: string;

  @Column()
  postalCode: number;

  @Column({
    length: 40,
    nullable: true,
    default: null,
  })
  city: string;

  @Column({
    length: 75,
  })
  domainMail: string;

  @Column({
    length: 100,
    nullable: true,
    default: true,
  })
  long: string;

  @Column({
    length: 100,
    nullable: true,
    default: true,
  })
  lat: string;
}
