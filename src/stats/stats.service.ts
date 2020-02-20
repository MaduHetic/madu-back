import { Injectable } from '@nestjs/common';
import { JoinTagPoiEntity } from '../join-tag-poi/joinTagPoiEntity';
import { PoiService } from '../poi/poi.service';
import { JoinTagPoiService } from '../join-tag-poi/join-tag-poi.service';
import { CompanyService } from '../company/company.service';
import { TypeService } from '../type/type.service';
import { TagsService } from '../tags/tags.service';
import { PercentTypeGreenScoreAndPoiService } from '../percent-type-green-score-and-poi/percent-type-green-score-and-poi.service';
import { range } from 'rxjs';

@Injectable()
export class StatsService {
  constructor(
    private readonly joinTagPoiService: JoinTagPoiService,
    private readonly poiService: PoiService,
    private readonly companyService: CompanyService,
    private readonly typeService: TypeService,
    private readonly tagsService: TagsService,
    private readonly percentTypeGreenScoreAndPoiService: PercentTypeGreenScoreAndPoiService,
  ) {}

  private async getGreenScore(): Promise<number[]> {
    const nbGreenScore: number[] = [];
    // tslint:disable-next-line:no-shadowed-variable
    for (let range = 100; range >= 50; range -= 10) {
      nbGreenScore.push(await this.percentTypeGreenScoreAndPoiService.countRangGreenScore(range, range - 10));
    }
    return nbGreenScore;
  }

  async getStat() {
    const nbPoi = await this.poiService.countPoi();
    const nbCompany = await this.companyService.countCompany();
    const types = await this.typeService.getType();
    await this.getGreenScore();
    const companyTypePromise = types.map(async (type) => {
      return {
          companyType: type,
          nbType: await this.companyService.countNbType(type),
        };
    });
    const tags = await this.tagsService.getAllTag();
    const getTagsPromise = tags.map(async (tag) => {
      return {
        tagName: tag.tag,
        nbTag: await this.joinTagPoiService.countTags(tag),
      };
    });
    return {
      poi: {
        nbPoi,
        tags: await Promise.all(getTagsPromise),
      },
      company: {
        nbCompany,
        companyType: await Promise.all(companyTypePromise),
      },
      greenScore: await this.getGreenScore(),
    };
  }
}
