import { Body, Controller, Get, Param, ParseIntPipe, Post, Request, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ThemeQuizzService } from './theme-quizz.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../guard/role.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../decorator/role.decorator';
import { ThemeQuizzDto } from './themeQuizzDto';
import { ThemeAndQuizzDto } from './themeAndQuizzDto';
import { ThemeQuizz } from './themeQuizzEntity';
import { ValidationDto } from './validationDto';

@ApiTags('theme-quizz')
@ApiBearerAuth()
@Controller('theme-quizz')
@UseGuards(AuthGuard('jwt'))
export class ThemeQuizzController {
  constructor(
    private readonly themeQuizzService: ThemeQuizzService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(RoleGuard)
  @Roles('admin')
  async addThemeQuizz(@Body() themeAndQuizzDto: ThemeAndQuizzDto) {
    return await this.themeQuizzService.addThemeAndQuizz(themeAndQuizzDto);
  }

  @Get()
  @UseGuards(RoleGuard)
  @Roles('user')
  async getTheme(@Request() req): Promise<ThemeQuizz[]> {
    return await this.themeQuizzService.getTheme(req.user.user);
  }

  @Get('question/:idTheme')
  @UseGuards(RoleGuard)
  @Roles('user')
  async getQuestionTheme(@Param('idTheme', new ParseIntPipe()) idTheme: number) {
    return await this.themeQuizzService.getQuestionTheme(idTheme);
  }

  @Put('submit')
  @UseGuards(RoleGuard)
  @UsePipes(ValidationPipe)
  @Roles('user')
  async submitAnswer(@Body() validationDto: ValidationDto, @Request() req) {
    return await this.themeQuizzService.checkAnswers(validationDto.answers,
      validationDto.idThemeQuizz, req.user.user);
  }
}
