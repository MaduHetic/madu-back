import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('knowIt')
export class KnowIt {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 75,
  })
  title: string;

  @Column({
    length: 750,
  })
  knowIt: string;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dateCreate: string;

  @Column({
    type: 'timestamp',
  })
  publicationDate: string;
}
