import {SetMetadata} from '@nestjs/common';

/**
 * this function set roles who have the right to access an a method or class
 * @param roles
 * @constructor
 */
export const Roles = (...roles: string []) => SetMetadata('roles', roles);
