import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import hexToRgba = require('hex-to-rgba');
import { exaToRgbaObject, filterInt } from '../utils/function.utils';

@Injectable()
export class EntityTypeInterceptor implements NestInterceptor {
  /**
   *
   * @param context
   * @param next
   */
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map(data => {
      data = data.map((d) => {
        d.isPoi = typeof d.domainMail === 'undefined' ? 1 : 0;
        if (d.isPoi) {
          d.tags =  d.tags.map((tag) => {
            exaToRgbaObject(tag.colorTag, tag);
            return tag;
          });
        }
        return d;
      });
      return data;
    }));
  }

}
