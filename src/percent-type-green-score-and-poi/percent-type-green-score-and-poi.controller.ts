import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PercentTypeGreenScoreAndPoiService } from './percent-type-green-score-and-poi.service';
import { PercentTypeGreenScoreAndPoiDto } from './PercentTypeGreenScoreAndPoiDto';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';

/**
 * Percent green score controller // todo doc
 */
@Controller('percent-type-green-score-and-poi')
@UseGuards(AuthGuard('jwt'))
export class PercentTypeGreenScoreAndPoiController {
  /**
   * todo doc
   * @param percentTypeGreenScoreAndPoiService
   */
  constructor(readonly percentTypeGreenScoreAndPoiService: PercentTypeGreenScoreAndPoiService) {}

  /**
   *  todo doc
   * @param percentTypeGreenScoreAndPoiDto
   */
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async addNewPercentTypeGCAndPoi(@Body() percentTypeGreenScoreAndPoiDto: PercentTypeGreenScoreAndPoiDto) {
    return 'Oui';
  }
}
