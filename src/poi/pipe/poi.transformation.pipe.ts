import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { filterInt } from '../../utils/function.utils';
import { PoiDto } from '../poiDto';

@Injectable()
export class PoiTransformationPipe implements PipeTransform {

  async transform(value: any, metadata: ArgumentMetadata): Promise<PoiDto> {
    const newValue = value;
    if (newValue.tags) {
      newValue.tags = value.tags.map((idTags) => {
        return filterInt(idTags);
      });
    }
    if (newValue.typeGreenScore && Array.isArray(newValue.typeGreenScore)) {
      newValue.typeGreenScore = value.typeGreenScore.map((percentAndTypeGc) => {
         percentAndTypeGc.idType = filterInt(percentAndTypeGc.idType);
         percentAndTypeGc.percent = filterInt(percentAndTypeGc.percent);
         if (isNaN(percentAndTypeGc.idType) || isNaN(percentAndTypeGc.percent)) {
           throw new BadRequestException('idGreen score or percent must be a number');
         }
         return percentAndTypeGc;
      });
    }
    newValue.tags = newValue.tags.filter((tag) => tag > 0);
    return newValue;
  }

}
