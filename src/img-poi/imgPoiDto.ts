import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ImgPoiDto {
  @IsString()
  readonly img: string;

  @IsOptional()
  @IsBoolean()
  readonly mainImage: boolean = false;
}
