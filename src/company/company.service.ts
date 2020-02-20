import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './companyEntity';
import { Repository } from 'typeorm';

/**
 * This class is the service to entity company
 */
@Injectable()
export class CompanyService {
  /**
   * set the company repository
   * @param companyRepository {Repository<Company>}
   */
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  /**
   * This method use to add or update a company in database
   * if the id is not null is for update else is for add
   * @param companyDto {CompanyDto}
   * @param id {number} | null}
   */
  async addCompany(companyDto, id = null) {
    const companyData = companyDto;
    if (id) {
      companyData.id = id;
    }
    return await this.companyRepository.save(companyData);
  }

  /**
   * this method return one company from database and send an exception when nothing has found
   * @param idCompany {number}
   * @returns Company
   */
  async getOne(idCompany: number): Promise<Company> {
    return await this.companyRepository.findOneOrFail(idCompany)
      .catch(() => {
        throw new NotFoundException(`Company with id ${idCompany} not found`);
      });
  }

  /**
   * This method returns all company from database
   * @returns Company[]
   */
  async getAllCompany(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  /**
   * This method delete one company from the database
   * @param idCompany {number}
   * @returns the delete data
   */
  async deleteCompany(idCompany: number) {
    return await this.companyRepository.delete(idCompany);
  }

  async countCompany(): Promise<number> {
    return await this.companyRepository.count();
  }

  async countNbType(type: string) {
    return await this.companyRepository.count({
      where: {
        type,
      },
    });
  }
}
