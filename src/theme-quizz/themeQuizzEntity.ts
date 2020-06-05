import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('theme_quizz')
export class ThemeQuizz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  theme: string;

  @Column({
    nullable: true,
    default: null,
    length: 300,
  })
  imgBackground: string;

  @Column({
    type: 'timestamp',
  })
  dateCreate: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  publicationDate: string;
}
