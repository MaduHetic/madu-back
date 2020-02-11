import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeGreenScore } from '../type-green-score/typeGreenScoreEntity';
import { Poi } from '../poi/poiEntity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class PercentTypeGreenScoreAndPoi {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ApiProperty()
  @Column()
  readonly percent: number;

  @ApiProperty()
  @ManyToOne(type => TypeGreenScore, (typeGreenScore) => typeGreenScore.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'idTypeGreenScore',
  })
  readonly typeGreenScore: TypeGreenScore;

  @ManyToOne(type => Poi, (poi) => poi.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'idPoi',
  })
  readonly poi: Poi;
}
