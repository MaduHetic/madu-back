import { Injectable } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { PoiService } from './poi.service';
import { Poi } from './poiEntity';
import { Company } from '../company/companyEntity';
import { ImgPoiService } from '../img-poi/img-poi.service';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { PercentTypeGreenScoreAndPoiService } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.service';

@Injectable()
export class PoiGeoCalcService {
  constructor(
    private readonly companyService: CompanyService,
    private readonly poiService: PoiService,
    private readonly imgPoiService: ImgPoiService,
    private readonly joinTagPoiService: JoinTagPoiService,
    private readonly percentTypeGreenScoreAndPoiService: PercentTypeGreenScoreAndPoiService,
  ) {}

  calcDist(poi, company: Company, x1: number, y1: number): number {
    const x2 =  parseFloat(poi.lat);
    const y2 =  parseFloat(poi.long);
    const R = 6371e3;
    const phi1 = x1 * Math.PI / 180;
    const phi2 = x2 * Math.PI / 180;
    const deltaPhi = (x2 - x1) * Math.PI / 180;
    const deltaLambda = (y2 - y1) * Math.PI / 180;

    const calc = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const distanceInRadians = 2 * Math.atan2(Math.sqrt(calc), Math.sqrt(1 - calc));
    return Math.round(R * distanceInRadians);
  }

  async getNearbyPoi(user) {
    const company = await this.companyService.getOne(user.idCompany);
    const pois = await this.poiService.getAllPoi();
    const x1 =  parseFloat(user.user.company.lat);
    const y1 =  parseFloat(user.user.company.long);
    return pois.filter((poi: any) =>  {
      const distance = this.calcDist(poi, user.user.company, x1, y1);
      if (distance < company.range) {
        poi.distance = distance;
        return true;
      }
      return false;
    });
  }

  async getDistancePoi(idPoi: number, user) {
    const poi: any = await this.poiService.getPoi(idPoi);
    const company = await this.companyService.getOne(user.company.idCompany);
    const x1 = parseFloat(company.lat);
    const y1 = parseFloat(company.long);
    poi.distance = this.calcDist(poi, company, x1, y1);
    poi.tags = await this.joinTagPoiService.serializeTagsData(
      await this.joinTagPoiService.getAllCompanyTag(poi));
    const imgs = await this.imgPoiService.getImgs(poi);
    poi.typeGreenScore = await this.percentTypeGreenScoreAndPoiService.getType(poi);
    poi.imgs = await this.imgPoiService.serializeImgUrl(imgs);
    return poi;
  }
}
