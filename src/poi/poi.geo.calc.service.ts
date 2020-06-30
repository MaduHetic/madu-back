import { Injectable } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { PoiService } from './poi.service';

@Injectable()
export class PoiGeoCalcService {
  constructor(
    private readonly companyService: CompanyService,
    private readonly poiService: PoiService,
  ) {}

  async getNearbyPoi(user) {
    const company = await this.companyService.getOne(user.idCompany);
    const pois = await this.poiService.getAllPoi();

    const x1 =  parseFloat(company.lat);
    const y1 =  parseFloat(company.long);
    const nearbyPoi = pois.filter((poi) => {
      const x2 =  parseFloat(poi.lat);
      const y2 =  parseFloat(poi.long);
      const R = 6371e3;
      const phi1 = x1 * Math.PI / 180;
      const phi2 = x2 * Math.PI / 180;
      const deltaPhi = (x2 - x1) * Math.PI / 180;
      const deltaLambda = (y2 - y1) * Math.PI / 180;

      const calc = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
      const distanceInRadians = 2 * Math.atan2(Math.sqrt(calc), Math.sqrt(1 - calc));
      return R * distanceInRadians < company.range;
    });
    return nearbyPoi;
  }
}
