import { PercentTypeGreenScoreAndPoiInterface } from './interfaces/percent-type-green-score-and-poi.interface';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PercentTypeGreenScoreAndPoiDto implements PercentTypeGreenScoreAndPoiInterface{
  @ApiProperty()
  @IsNumber()
  readonly idPoi: number;

  @ApiProperty()
  @IsNumber()
  readonly idTypeGreenScore: number;

  @ApiProperty()
  @IsNumber()
  readonly percent: number;
}
