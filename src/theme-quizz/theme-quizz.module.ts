import { Module } from '@nestjs/common';
import { ThemeQuizzService } from './theme-quizz.service';
import { ThemeQuizzController } from './theme-quizz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeQuizz } from './themeQuizzEntity';
import { QuizzModule } from '../quizz/quizz.module';
import { QuestionQuizzModule } from '../question-quizz/question-quizz.module';
import { UserModule } from '../user/user.module';
import { JoinUserThemeQuizzModule } from '../join-user-theme-quizz/join-user-theme-quizz.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ThemeQuizz]),
    QuizzModule,
    QuestionQuizzModule,
    UserModule,
    JoinUserThemeQuizzModule,
  ],
  providers: [ThemeQuizzService],
  controllers: [ThemeQuizzController],
})
export class ThemeQuizzModule {}
