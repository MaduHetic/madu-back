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
  postalCode: string;

  @Column({
    length: 40,
    nullable: true,
    default: null,
  })
  city: string;

  @Column({
    length: 75,
    nullable: true,
    default: null,
  })
  domainMail: string;

  @Column({
    length: 50,
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
    default: true,
  })
  lat: string;

  @Column({
    default: 1,
  })
  nbWorker: number;

  @Column({
    type: 'date',
    default: '2020-10-10',
  })
  beginDeal: string;

  @Column({
     type: 'date',
    default: '2020-10-10',
  })
  endDeal: string;
}
