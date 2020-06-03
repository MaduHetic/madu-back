import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizz')
export class Quizz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
  })
  question: string;

  @Column({
    default: 10,
  })
  crystalGain: number;

  @Column({
    type: 'timestamp',
  })
  dateCreate: string;

  @Column({
    type: 'timestamp',
    default: null,
    nullable: true,
  })
  publicationDate: string;
}
