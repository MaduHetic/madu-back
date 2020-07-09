import { User } from '../user/userEntity';
import { ThemeQuizz } from '../theme-quizz/themeQuizzEntity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class JoinUserThemeQuizz {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, (user) =>  user.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'userId',
  })
  user: User;

  @ManyToOne(type => ThemeQuizz, (themeQuizz) => themeQuizz.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'themeQuizzId',
  })
  themeQuizz: ThemeQuizz;
}
