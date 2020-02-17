/**
 * this interface define the value attempt in a jwt token
 */
export interface AccessTokenInterfaces {
   /**
    * this data allows to know who send the request and authorize or not the access to some route
    */
   access_token: string;
}
