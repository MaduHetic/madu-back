import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ThemeQuizzService } from './theme-quizz.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../guard/role.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../decorator/role.decorator';
import { ThemeQuizzDto } from './themeQuizzDto';

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
  async addThemeQuizz(@Body() themeQuizzDto: ThemeQuizzDto) {
    return themeQuizzDto;
  }
}
