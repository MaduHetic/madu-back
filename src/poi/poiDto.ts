import { Injectable } from '@nestjs/common';
import { PoiInterface } from './interfaces/poi.interface';
import { IsArray, IsEnum, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { PriceEnum } from './enum/price.enum';

@Injectable()
export class PoiDto implements PoiInterface {
  @IsString()
  readonly address: string;

  @IsString()
  readonly city: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumberString()
  @IsOptional()
  readonly greenScore: string;

  @IsString()
  @IsOptional()
  readonly lat: string;

  @IsString()
  @IsOptional()
  readonly long: string;

  @IsString()
  readonly name: string;

  @IsNumberString()
  readonly postalCode: string;

  @IsOptional()
  @IsArray()
  readonly tags: number[];

  @IsOptional()
  @IsArray()
  readonly type: number[];

  @IsEnum(PriceEnum)
  readonly price: string;

}
