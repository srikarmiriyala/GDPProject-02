// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { CountriesService } from './countries.service';
// import { CountriesController } from './countries.controller';
// import { Country } from 'src/entities/countries.entity';
// import { AuthModule } from 'src/auth/auth.module';

// @Module({
//   imports: [TypeOrmModule.forFeature([Country]), AuthModule],
//   providers: [CountriesService],
//   controllers: [CountriesController],
// })
// export class CountriesModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { Country, CountrySchema } from '../schemas/country.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    AuthModule,
  ],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
