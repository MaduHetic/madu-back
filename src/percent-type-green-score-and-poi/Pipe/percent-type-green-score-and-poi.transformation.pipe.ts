import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { PercentTypeGreenScoreAndPoiDto } from '../PercentTypeGreenScoreAndPoiDto';
import { filterInt } from '../../utils/function.utils';

@Injectable()
export class PercentTypeGreenScoreAndPoiTransformationPipe implements PipeTransform<any, Promise<PercentTypeGreenScoreAndPoiDto>> {
  transform(value: any, metadata: ArgumentMetadata): Promise<PercentTypeGreenScoreAndPoiDto> {
    const newValue = value;
    newValue.idPoi = filterInt(value.idPoi);
    newValue.idTypeGreenScore = filterInt(value.idTypeGreenScore);
    newValue.percent = filterInt(value.percent);
    return newValue;
  }
}
