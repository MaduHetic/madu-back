import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Poi } from '../poi/poiEntity';
import { Type } from '../type/typeEntity';

@Entity()
export class JoinTypePoi {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Poi, (poi) => poi.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'poiId',
  })
  poi: Poi;

  @ManyToOne(type => Type, (type) => type.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: true,
  })
  type: Type;

}
