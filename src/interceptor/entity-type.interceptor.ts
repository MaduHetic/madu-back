import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import hexToRgba = require('hex-to-rgba');
import { filterInt } from '../utils/function.utils';

@Injectable()
export class EntityTypeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map(data => {
      data = data.map((d) => {
        d.isPoi = typeof d.domainMail === 'undefined' ? 1 : 0;
        if (d.isPoi) {
          d.tags =  d.tags.map((tag) => {
            const hexaToRgba = hexToRgba(tag.colorTag);
            const getValueRba = hexaToRgba.split('(')[1].split(',').filter((elem) => typeof filterInt(elem) === 'number');
            tag.r = filterInt(getValueRba[0].trim());
            tag.g = filterInt(getValueRba[1].trim());
            tag.b = filterInt(getValueRba[2].trim());
            tag.a = filterInt(getValueRba[3].replace(')', '').trim());
            return tag;
          });
        }
        return d;
      });
      return data;
    }));
  }

}
