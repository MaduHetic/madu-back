import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Challenge } from '../challenge/challengeEntity';
import { User } from '../user/userEntity';

@Entity('join_user_challenge')
export class JoinUserChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: false,
  })
  do: boolean;

  @ManyToOne(type => Challenge, (challenge) => challenge.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'challengeId',
  })
  challenge: Challenge;

  @ManyToOne(type => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'userId',
  })
  user: User;
}
