import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Poi } from '../poi/poiEntity';

@Entity('img_poi')
export class ImgPoi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 300,
  })
  img: string;

  @ManyToOne(type => Poi, (poi) => poi.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'idPoi',
  })
  poi: Poi;
}
