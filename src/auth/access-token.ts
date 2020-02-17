import { AccessTokenInterfaces } from './interfaces/access-token.interfaces';

/**
 * This controller allows to create a new jwt token
 */
export class AccessToken implements AccessTokenInterfaces {
  /**
   * Cf interface
   */
    // tslint:disable-next-line:variable-name
  access_token: string;

  /**
   * Set the access token to the access_token properties
   * @param accessToken {string} value will be set to access_token property
   */
  constructor(accessToken) {
    this.access_token = accessToken;
  }
}
