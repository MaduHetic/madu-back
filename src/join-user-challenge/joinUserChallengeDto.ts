import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class JoinUserChallengeDto {
  @IsBoolean()
  readonly doChallenge: boolean;

  @IsNumber()
  readonly challenge: number;
}
