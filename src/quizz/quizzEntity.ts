import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ThemeQuizz } from '../theme-quizz/themeQuizzEntity';

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

  @ManyToOne(type => ThemeQuizz, (themeQuizz) => themeQuizz.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({
    name: 'idThemeQuizz',
  })
  themeQuizz: ThemeQuizz;
}
