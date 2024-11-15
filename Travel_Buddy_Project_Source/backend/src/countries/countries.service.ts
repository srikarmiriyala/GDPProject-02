// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Country } from 'src/entities/countries.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class CountriesService {
//   constructor(
//     @InjectRepository(Country)
//     private countriesRepository: Repository<Country>,
//   ) {}

//   // Find all with sorting, filtering, and pagination, including total count
//   async findAll(query: any): Promise<{ countries: Country[]; total: number }> {
//     const { search, sort, order = 'ASC', limit = 10, offset = 0 } = query;

//     const qb = this.countriesRepository.createQueryBuilder('country');

//     // Add case-insensitive search filter
//     if (search) {
//       qb.where(
//         'LOWER(country.name) LIKE LOWER(:search) OR LOWER(country.code) LIKE LOWER(:search)',
//         {
//           search: `%${search}%`,
//         },
//       );
//     }

//     // Add sorting
//     if (sort) {
//       qb.orderBy(`country.${sort}`, order.toUpperCase() as any);
//     }

//     qb.skip(offset).take(limit);

//     // Get results and total count
//     const [countries, total] = await qb.getManyAndCount();

//     return { countries, total };
//   }

//   findOne(code: string): Promise<Country> {
//     return this.countriesRepository.findOne({ where: { code } });
//   }

//   async create(country: Country): Promise<Country> {
//     return this.countriesRepository.save(country);
//   }

//   async update(code: string, country: Country): Promise<void> {
//     await this.countriesRepository.update(code, country);
//   }

//   async remove(code: string): Promise<void> {
//     await this.countriesRepository.delete(code);
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../schemas/country.schema';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  // Find all with sorting, filtering, and pagination, including total count
  async findAll(query: any): Promise<{ countries: Country[]; total: number }> {
    const {
      search,
      sort = 'name',
      order = 'ASC',
      limit = 10,
      offset = 0,
    } = query;

    const filter = search
      ? {
          $or: [
            { name: new RegExp(search, 'i') },
            { code: new RegExp(search, 'i') },
          ],
        }
      : {};

    const countries = await this.countryModel
      .find(filter)
      .sort({ [sort]: order === 'DESC' ? -1 : 1 })
      .skip(offset)
      .limit(limit)
      .exec();

    const total = await this.countryModel.countDocuments(filter).exec();

    return { countries, total };
  }

  async findOne(code: string): Promise<Country> {
    const country = await this.countryModel.findOne({ code }).exec();
    if (!country) {
      throw new NotFoundException(`Country with code ${code} not found`);
    }
    return country;
  }

  async create(country: Country): Promise<Country> {
    const newCountry = new this.countryModel(country);
    return newCountry.save();
  }

  async update(code: string, country: Country): Promise<void> {
    const updatedCountry = await this.countryModel
      .findOneAndUpdate({ code }, country, { new: true })
      .exec();

    if (!updatedCountry) {
      throw new NotFoundException(`Country with code ${code} not found`);
    }
  }

  async remove(code: string): Promise<void> {
    const result = await this.countryModel.findOneAndDelete({ code }).exec();
    if (!result) {
      throw new NotFoundException(`Country with code ${code} not found`);
    }
  }
}
