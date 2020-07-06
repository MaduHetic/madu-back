import { Injectable } from '@nestjs/common';
import { PoiInterface } from './interfaces/poi.interface';
import { IsArray, IsEnum, IsNumber, IsNumberString, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PriceEnum } from './enum/price.enum';
import { ApiProperty, ApiPropertyOptional, getSchemaPath } from '@nestjs/swagger';
import { PercentAndIdTag } from './percentAndIdTag';
import { TypePoiEnum } from './enum/typePoiEnum';
import { ImgPoiDto } from '../img-poi/imgPoiDto';
import { Type } from 'class-transformer';

/**
 * Data attempt to add new poi
 */
@Injectable()
export class PoiDto implements PoiInterface {

  /**
   * Address of Poi
   */
  @ApiProperty({
    description: 'Address Of Poi',
  })
  @IsString()
  readonly address: string;

  /**
   * City of poi
   */
  @ApiProperty({
    description: 'City of the Poi',
  })
  @IsString()
  readonly city: string;

  /**
   * Description of poi
   */
  @ApiPropertyOptional({
    description: 'short description of the Poi',
  })
  @IsString()
  @IsOptional()
  readonly description: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  readonly greenScore: number = 10;

  /**
   * Latitude of poi
   */
  @ApiPropertyOptional({
    description: 'Latitude of the Poi',
  })
  @IsString()
  @IsOptional()
  readonly lat: string;

  @ApiPropertyOptional({
    description: 'Longitude of the Poi',
  })
  @IsString()
  @IsOptional()
  readonly long: string;

  @ApiPropertyOptional({
    description: 'Name of the Poi',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'postalCode of the Poi',
  })
  @IsNumberString()
  readonly postalCode: string;

  @ApiPropertyOptional({
    type: [Number],
    description: 'Array of id tags',
  })
  @IsOptional()
  @IsArray()
  readonly tags: number[];

  /*
  @ApiPropertyOptional({
    type: [Number],
    description: 'Array of id Poi type',
  })
  @IsOptional()
  @IsArray()
  readonly type: number[];
  */

  @ApiPropertyOptional({
    type: [PercentAndIdTag],
    description: 'Array of id type Green score',
  })
  // @IsArray()
  @ValidateNested()
  @IsOptional()
  readonly typeGreenScore: PercentAndIdTag[];

  @ApiProperty({
    description: 'Type of poi ex (restaurant)',
  })
  @IsEnum(TypePoiEnum)
  readonly type: string;

  @ApiProperty({
    description: 'Price range of the point of interest',
    enum: PriceEnum,
  })
  @IsEnum(PriceEnum)
  readonly price: string;

  @IsOptional()
  @IsString()
  readonly mainImg: string;

  @IsArray()
  @IsOptional()
  readonly imgsPoi: string[];
}
