import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { KnowItService } from './know-it.service';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { KnowItDto } from './knowItDto';

@ApiTags('know-it')
@ApiBearerAuth()
@Controller('know-it')
@UseGuards(AuthGuard('jwt'))
export class KnowItController {
  constructor(
    private readonly knowItService: KnowItService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(RoleGuard)
  @Roles('admin')
  async addKnowIt(@Body() knowItDto: KnowItDto) {
    return await this.knowItService.addKnowIt(knowItDto);
  }

  @Get()
  @UseGuards(RoleGuard)
  @Roles('user')
  async getKnowIt() {
    return await this.knowItService.getKnowIt();
  }
}
