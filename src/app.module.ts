import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { PoiModule } from './poi/poi.module';
import { CompanyModule } from './company/company.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role/roleEntity';
import { User } from './user/userEntity';
import { Company } from './company/companyEntity';
import { TypeModule } from './type/type.module';
import { TagsModule } from './tags/tags.module';
import { Type } from './type/typeEntity';
import { Tag } from './tags/tagEntity';
import { Poi } from './poi/poiEntity';
import { JoinTagPoiModule } from './join-tag-poi/join-tag-poi.module';
import { UserAppModule } from './user-app/user-app.module';
import { JoinTagPoiEntity } from './join-tag-poi/joinTagPoiEntity';
import { GreenScoreModule } from './green-score/green-score.module';
import { TypeGreenScoreModule } from './type-green-score/type-green-score.module';
import { PercentTypeGreenScoreAndPoiModule } from './percent-type-green-score-and-poi/percent-type-green-score-and-poi.module';
import { TypeGreenScore } from './type-green-score/typeGreenScoreEntity';
import { PercentTypeGreenScoreAndPoi } from './percent-type-green-score-and-poi/percentTypeGreenScoreAndPoiEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: 3306,
      username: process.env.DB_USER || 'admin',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'madu',
      entities: [
        Role,
        User,
        Company,
        Type,
        Tag,
        Poi,
        JoinTagPoiEntity,
        TypeGreenScore,
        PercentTypeGreenScoreAndPoi,
      ],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    RoleModule,
    PoiModule,
    CompanyModule,
    TypeModule,
    TagsModule,
    JoinTagPoiModule,
    UserAppModule,
    GreenScoreModule,
    TypeGreenScoreModule,
    PercentTypeGreenScoreAndPoiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
