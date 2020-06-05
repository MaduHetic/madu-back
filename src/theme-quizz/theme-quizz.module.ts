import { Module } from '@nestjs/common';
import { ThemeQuizzService } from './theme-quizz.service';
import { ThemeQuizzController } from './theme-quizz.controller';

@Module({
  providers: [ThemeQuizzService],
  controllers: [ThemeQuizzController]
})
export class ThemeQuizzModule {}
