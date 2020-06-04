import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { QuizzService } from './quizz.service';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { QuizzAndQuestionDto } from './quizzAndQuestionDto';

@ApiTags('quizz')
@ApiBearerAuth()
@Controller('quizz')
@UseGuards(AuthGuard('jwt'))
export class QuizzController {
  constructor(
    private readonly quizzService: QuizzService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(RoleGuard)
  @Roles('admin')
  async addQuizz(@Body() quizDto: QuizzAndQuestionDto) {
    return await this.quizzService.addQuizz(quizDto);
  }

  @Get()
  @UseGuards(RoleGuard)
  @Roles('user')
  async getQuizz() {
    return await this.quizzService.getQuizzs();
  }
}
