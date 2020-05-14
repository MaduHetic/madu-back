import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../role/roleEntity';
import { Company } from '../company/companyEntity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
    unique: true,
  })
  mail: string;

  @Column({
    length: 50,
  })
  firstName: string;

  @Column({
    length: 50,
  })
  lastName: string;

  @Column({
    length: 200,
  })
  password: string;

  @ManyToOne(type => Role, (role) => role.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({
    name: 'roleId',
  })
  role: Role;

  @ManyToOne(type => Company, (company) => company.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({
    name: 'companyId',
  })
  company: Company;
}
