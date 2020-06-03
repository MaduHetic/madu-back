import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('challenge')
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'longtext',
  })
  description: string;

  @Column({
    default: 20,
  })
  crystalGain: number;

  @Column({
    type: 'timestamp',
  })
  dateCreate: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  publicationDate: string;
}
