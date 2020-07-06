import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ChallengeDto } from './challengeDto';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';

@ApiTags('Challenge')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('challenge')
export class ChallengeController {
  constructor(
    private readonly challengeService: ChallengeService,
  ) {}

  @UseGuards(RoleGuard)
  @Roles('admin')
  @UsePipes(ValidationPipe)
  @Post()
  async addChallenge(@Body() challengeDto: ChallengeDto) {
    return await this.challengeService.addChallenge(challengeDto);
  }

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get()
  async getChallenges() {
    return await this.challengeService.getChallenge();
  }

  @UseGuards(RoleGuard)
  @Roles('user')
  @Get('current')
  async getCurrentChallenge() {
    return await this.challengeService.getChallenge();
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  async deleteChallenge(@Param('id', new ParseIntPipe()) idChallenge: number) {
    return await this.challengeService.deleteChallenge(idChallenge);
  }

}
