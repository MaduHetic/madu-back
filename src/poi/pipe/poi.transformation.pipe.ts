import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { filterInt } from '../../utils/function.utils';
import { PoiDto } from '../poiDto';

@Injectable()
export class PoiTransformationPipe implements PipeTransform {

  async transform(value: any, metadata: ArgumentMetadata): Promise<PoiDto> {
    const newValue = value;
    if (newValue.type) {
      newValue.type = value.type.map((type) => {
        return filterInt(type);
      });
    }
    if (newValue.tags) {
      newValue.tags = value.tags.map((idTags) => {
        return filterInt(idTags);
      });
    }
    return newValue;
  }

}
