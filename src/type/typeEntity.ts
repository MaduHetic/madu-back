import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 25,
  })
  type: string;
}
