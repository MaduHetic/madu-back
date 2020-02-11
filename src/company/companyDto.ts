import { Injectable } from '@nestjs/common';
import { CompanyInterface } from './interface/company.interface';
import { IsDate, IsDateString, IsEnum, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { TypeEnum } from './enum/type.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Injectable()
export class CompanyDto implements CompanyInterface {

  @ApiPropertyOptional()
  @IsOptional()
  readonly id?: number;

  @ApiProperty({
    description: 'Address Of Client',
  })
  @IsString()
  readonly address: string;

  @ApiProperty({
    description: 'City of client',
  })
  @IsString()
  readonly city: string;

  @ApiProperty({
    description: 'domain mail of client to authorize only employees of this client (ex: @example.com',
  })
  @IsOptional()
  @IsString()
  readonly domainMail: string;

  @ApiProperty({
    description: 'postal code of the client',
  })
  @IsNumberString()
  readonly postalCode: string;

  @ApiProperty({
    description: 'Type of Client',
    enum: TypeEnum,
  })
  @IsEnum(TypeEnum)
  readonly type: string;

  @ApiProperty({
    description: 'contract start date',
  })
  @IsString()
  readonly beginDeal: string;

  @ApiProperty({
    description: 'Name of client',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'contact start end',
  })
  @IsString()
  readonly endDeal: string;

  @ApiPropertyOptional({
    description: 'number of worker who work in this company. This data is here to know how many users to expect',
  })
  @IsOptional()
  @IsNumberString()
  readonly nbWorker: number;
}
