import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompanyDto } from './companyDto';
import { CompanyService } from './company.service';

@Controller('company')
@UseGuards(AuthGuard('jwt'))
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  /**
   * @param {CompanyDto} companyDto information to add a new company
   * @returns Data was added
   */
  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  async addCompany(@Body() companyDto: CompanyDto) {
    return await this.companyService.addCompany(companyDto);
  }

  @Get('one/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getOneCompany(@Param('id', new ParseIntPipe()) id: number) {
    return await this.companyService.getOne(id);
  }

  @Get()
  async getAllCompany() {
    return await this.companyService.getAllCompany();
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  async updateCompany(@Param('id', new ParseIntPipe()) id: number, @Body() companyDto: CompanyDto) {
    return await this.companyService.addCompany(companyDto, id);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({  transform: true }))
  async deleteCompany(@Param('id', new ParseIntPipe()) idCompany: number) {
    await this.companyService.getOne(idCompany);
    await this.companyService.deleteCompany(idCompany);
    return 'delete success';
  }
}
