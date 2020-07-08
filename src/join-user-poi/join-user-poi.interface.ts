import { Poi } from '../poi/poiEntity';
import { User } from '../user/userEntity';

export interface JoinUserPoiInterface {
  readonly poi: Poi;
  readonly user: User;
}
