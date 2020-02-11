import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('percent-type-green-score-and-poi')
@UseGuards(AuthGuard('jwt'))
export class PercentTypeGreenScoreAndPoiController {}
