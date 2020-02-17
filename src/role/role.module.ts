import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roleEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]),
  ],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
