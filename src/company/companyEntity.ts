import { Entity } from 'typeorm';

@Entity()
export class Company {
  id: number;

  address: string;

  postalCode: number;
}
