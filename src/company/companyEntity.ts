import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Company entity from the database
 */
@Entity()
export class Company {
  /**
   * Unique id to a entity stock in db
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * address of company entity stock in db
   */
  @Column({
    length: 100,
  })
  address: string;

  /**
   * name of company entity stock in db
   */
  @Column({
    unique: true,
    length: 50,
  })
  name: string;

  /**
   * postal code of company entity stock in db
   */
  @Column()
  postalCode: string;

  /**
   * city of company entity stock in db
   */
  @Column({
    length: 40,
    nullable: true,
    default: null,
  })
  city: string;

  /**
   * domain mail of client to authorize only employees of this client (ex: @example.com)
   */
  @Column({
    length: 75,
    nullable: true,
    default: null,
  })
  domainMail: string;

  /**
   * Type of company entity stock in db (ex: co-working, school etc)
   */
  @Column({
    length: 50,
  })
  type: string;

  /**
   * Longitude of company entity stock in db. This data is here to create range around the company to show the pois
   */
  @Column({
    length: 100,
    nullable: true,
    default: null,
  })
  long: string;

  /**
   * Latitude of company entity stock in db. This data is here to create range around the company to show the pois
   */
  @Column({
    length: 100,
    nullable: true,
    default: true,
  })
  lat: string;

  /**
   * number of worker who work in this company. This data is here to know how many users to expect
   */
  @Column({
    default: 1,
  })
  nbWorker: number;

  @Column({
    default: 1000,
  })
  range: number;

  /**
   * Date when the contract begin
   */
  @Column({
    type: 'date',
    default: '2020-10-10',
  })
  beginDeal: string;

  /**
   * Date when the contract end
   */
  @Column({
     type: 'date',
    default: '2020-10-10',
  })
  endDeal: string;

  @CreateDateColumn()
  createDate: string;

  @Column({
    length: 500,
    default: null,
  })
  logo: string;
}
