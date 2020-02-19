import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from '../tags/tagEntity';
import { Poi } from '../poi/poiEntity';


@Entity()
export class JoinTagPoiEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @ManyToOne(type => Tag, (tag) => tag.id, {
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({
    name: 'tagId',
  })
  tag: Tag;

  @ManyToOne(type => Poi, (poi) => poi.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'poiId',
  })
  poi: Poi;
}
