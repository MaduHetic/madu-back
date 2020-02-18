import { Poi } from './poiEntity';
import { Tag } from '../tags/tagEntity';
import { JoinTagPoiEntity } from '../join-tag-poi/joinTagPoiEntity';

export class PoiAndTags {
  poi: Poi;
  tags: JoinTagPoiEntity[];

  constructor(poi: Poi, tags: JoinTagPoiEntity[]) {
    this.poi = poi;
    this.tags = tags;
  }
}
