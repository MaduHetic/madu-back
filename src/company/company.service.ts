import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './companyEntity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async addCompany(companyDto, id = null) {
    const companyData = companyDto;
    if (id) {
      companyData.id = id;
    }
    return await this.companyRepository.save(companyData);
  }

  async getOne(idCompany: number): Promise<Company> {
    return await this.companyRepository.findOneOrFail(idCompany)
      .catch(() => {
        throw new NotFoundException(`Company with id ${idCompany} not found`);
      });
  }

  async getAllCompany(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  async deleteCompany(idCompany: number) {
    return await this.companyRepository.delete(idCompany);
  }
}
