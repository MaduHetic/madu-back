import { Injectable } from '@nestjs/common';
import { PoiInterface } from './interfaces/poi.interface';
import { IsArray, IsEnum, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { PriceEnum } from './enum/price.enum';
import { ApiProperty, ApiPropertyOptional, getSchemaPath } from '@nestjs/swagger';
import { Type } from '../type/typeEntity';
import { TypeDto } from '../type/typeDto';
import { Tag } from '../tags/tagEntity';

@Injectable()
export class PoiDto implements PoiInterface {
  @ApiProperty({
    description: 'Address Of Poi',
  })
  @IsString()
  readonly address: string;

  @ApiProperty({
    description: 'City of the Poi',
  })
  @IsString()
  readonly city: string;

  @ApiPropertyOptional({
    description: 'short description of the Poi',
  })
  @IsString()
  @IsOptional()
  readonly description: string;

  @ApiPropertyOptional()
  @IsNumberString()
  @IsOptional()
  readonly greenScore: string;

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
    type: [Tag],
    description: 'Array of id tags',
    anyOf: [
      { $ref: getSchemaPath(Tag) },
    ],
  })
  @IsOptional()
  @IsArray()
  readonly tags: number[];

  @ApiPropertyOptional({
    type: [Type],
    description: 'Array of Poi type',
    anyOf: [
      { $ref: getSchemaPath(Type) },
    ],
  })
  @IsOptional()
  @IsArray()
  readonly type: Type[];

  @ApiProperty({
    description: 'Price range of the point of interest',
    enum: PriceEnum,
  })
  @IsEnum(PriceEnum)
  readonly price: string;

}
