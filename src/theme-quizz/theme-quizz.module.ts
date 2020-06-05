import { Module } from '@nestjs/common';
import { ThemeQuizzService } from './theme-quizz.service';
import { ThemeQuizzController } from './theme-quizz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeQuizz } from './themeQuizzEntity';
import { QuizzModule } from '../quizz/quizz.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ThemeQuizz]),
    QuizzModule,
  ],
  providers: [ThemeQuizzService],
  controllers: [ThemeQuizzController],
})
export class ThemeQuizzModule {}
