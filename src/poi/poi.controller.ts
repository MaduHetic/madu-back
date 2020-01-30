import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PoiService } from './poi.service';
import { AuthGuard } from '@nestjs/passport';
import { PoiDto } from './poiDto';

@Controller('poi')
@UseGuards(AuthGuard('jwt'))
export class PoiController {
  constructor(private readonly poiService: PoiService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async addPoi(@Body() poiDto: PoiDto) {
    return await this.poiService.addPoi(poiDto);
  }
}
