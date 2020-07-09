import { Module } from '@nestjs/common';
import { JoinUserThemeQuizzService } from './join-user-theme-quizz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinUserThemeQuizz } from './joinUserThemeQuizzEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      JoinUserThemeQuizz,
    ]),
  ],
  providers: [JoinUserThemeQuizzService],
  exports: [JoinUserThemeQuizzService],
})
export class JoinUserThemeQuizzModule {}
