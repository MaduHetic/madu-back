import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quizz } from '../quizz/quizzEntity';
import { User } from '../user/userEntity';

@Entity('join_user_quizz')
export class JoinUserQuzz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: false,
  })
  goodAnswer: boolean;

  @ManyToOne(type => Quizz, (quizz) => quizz.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'quizzId',
  })
  quizz: Quizz;

  @ManyToOne(type => User, (user) => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'userId',
  })
  user: User;
}
