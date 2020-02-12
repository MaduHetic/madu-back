import { Injectable } from '@nestjs/common';

/**
 * Demo service nest
 */
@Injectable()
export class AppService {
  /**
   * demo method nest
   * @returns {string}
   */
  getHello(): string {
    return 'Hello World!';
  }
}
