import { Injectable } from '@nestjs/common';
import { CompanyInterface } from './interface/company.interface';
import { IsDate, IsDateString, IsEnum, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { TypeEnum } from './enum/type.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Object that defines how the data will be sent over the network to add a new Company
 */
@Injectable()
export class CompanyDto implements CompanyInterface {

  /**
   * Data useless i guess
   */
  @ApiPropertyOptional()
  @IsOptional()
  readonly id?: number;

  /**
   * Address Of Client stock in db
   */
  @ApiProperty({
    description: 'Address Of Client',
  })
  @IsString()
  readonly address: string;

  /**
   * City of client stock in db
   */
  @ApiProperty({
    description: 'City of client',
  })
  @IsString()
  readonly city: string;

  /**
   * domain mail of client to authorize only employees of this client (ex: @example.com
   */
  @ApiProperty({
    description: 'domain mail of client to authorize only employees of this client (ex: @example.com)',
  })
  @IsOptional()
  @IsString()
  readonly domainMail: string;

  /**
   * postal code of the client
   */
  @ApiProperty({
    description: 'postal code of the client',
  })
  @IsNumberString()
  readonly postalCode: string;

  /**
   * Type of client (ex: co-working, school etc)
   */
  @ApiProperty({
    description: 'Type of Client',
    enum: TypeEnum,
  })
  @IsEnum(TypeEnum)
  readonly type: string;

  /**
   * contract start date
   */
  @ApiProperty({
    description: 'contract start date',
  })
  @IsString()
  readonly beginDeal: string;

  /**
   * Name of client
   */
  @ApiProperty({
    description: 'Name of client',
  })
  @IsString()
  readonly name: string;

  /**
   * contract end date
   */
  @ApiProperty({
    description: 'contract end date',
  })
  @IsString()
  readonly endDeal: string;

  @ApiProperty({
    description: 'longitude of company',
  })
  @IsString()
  readonly long: string;

  @ApiProperty({
    description: 'latitude of company',
  })
  @IsString()
  readonly lat: string;

  /**
   * number of worker who work in this company. This data is here to know how many users to expect
   */
  @ApiPropertyOptional({
    description: 'number of worker who work in this company. This data is here to know how many users to expect',
  })
  @IsOptional()
  @IsNumberString()
  readonly nbWorker: number;
}
