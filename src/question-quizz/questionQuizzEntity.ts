import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quizz } from '../quizz/quizzEntity';

@Entity('questionQuizz')
export class QuestionQuizz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
  })
  answer: string;

  @Column({
    default: false,
  })
  goodAnswer: boolean;

  @ManyToOne(type => Quizz, (quizz) => quizz.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({
    name: 'quizzId',
  })
  quizz: Quizz;
}
