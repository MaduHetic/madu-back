import { Injectable } from '@nestjs/common';
import { CompanyInterface } from './interface/company.interface';
import { IsDate, IsDateString, IsEnum, IsNumber, IsNumberString, IsOptional, IsString } from 'class-validator';
import { TypeEnum } from './enum/type.enum';
import DateTimeFormat = Intl.DateTimeFormat;

@Injectable()
export class CompanyDto implements CompanyInterface {

  @IsOptional()
  readonly id?: number;

  @IsString()
  readonly address: string;

  @IsString()
  readonly city: string;

  @IsOptional()
  @IsString()
  readonly domainMail: string;

  @IsNumberString()
  readonly postalCode: string;

  @IsEnum(TypeEnum)
  readonly type: string;

  @IsString()
  readonly beginDeal: string;

  @IsString()
  readonly endDeal: string;

  @IsOptional()
  @IsNumber()
  readonly nbWorker: number;
}
