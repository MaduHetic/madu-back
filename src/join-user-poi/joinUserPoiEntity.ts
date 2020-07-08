import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Poi } from '../poi/poiEntity';
import { User } from '../user/userEntity';

@Entity()
export class JoinUserPoi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recommend: boolean;

  @ManyToOne(type => Poi, (poi) => poi.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'poiId',
  })
  poi: Poi;

  @ManyToOne(type => User, (user) => user.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'userId',
  })
  user: User;
}
