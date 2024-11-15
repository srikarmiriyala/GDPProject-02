// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Airport } from 'src/entities/airports.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class AirportsService {
//   constructor(
//     @InjectRepository(Airport)
//     private airportsRepository: Repository<Airport>,
//   ) {}

//   // Find all with sorting, filtering, and pagination, including total count
//   async findAll(query: any): Promise<{ airports: Airport[]; total: number }> {
//     const {
//       search,
//       sort = 'id',
//       order = 'ASC',
//       limit = 10,
//       offset = 0,
//     } = query; // Default sort by 'id' if not provided

//     const qb = this.airportsRepository.createQueryBuilder('airport');

//     // Add case-insensitive search filter if provided
//     if (search) {
//       qb.where(
//         'LOWER(airport.name) LIKE LOWER(:search) OR LOWER(airport.city) LIKE LOWER(:search) OR LOWER(airport.country) LIKE LOWER(:search)',
//         {
//           search: `%${search}%`,
//         },
//       );
//     }

//     // Add sorting by the provided column or default to 'id'
//     qb.orderBy(`airport.${sort}`, order.toUpperCase() as any);

//     // Add pagination (limit and offset)
//     qb.skip(offset).take(limit);

//     // Get results and total count
//     const [airports, total] = await qb.getManyAndCount();

//     return { airports, total };
//   }

//   findOne(id: number): Promise<Airport> {
//     return this.airportsRepository.findOne({ where: { id } });
//   }

//   async create(airport: Airport): Promise<Airport> {
//     return this.airportsRepository.save(airport);
//   }

//   async update(id: number, airport: Airport): Promise<void> {
//     await this.airportsRepository.update(id, airport);
//   }

//   async remove(id: number): Promise<void> {
//     await this.airportsRepository.delete(id);
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Airport } from '../schemas/airport.schema';

@Injectable()
export class AirportsService {
  constructor(
    @InjectModel(Airport.name) private airportModel: Model<Airport>,
  ) {}

  // Find all with sorting, filtering, and pagination, including total count
  async findAll(query: any): Promise<{ airports: Airport[]; total: number }> {
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
            { city: new RegExp(search, 'i') },
            { country: new RegExp(search, 'i') },
          ],
        }
      : {};

    const airports = await this.airportModel
      .find(filter)
      .sort({ [sort]: order === 'DESC' ? -1 : 1 })
      .skip(offset)
      .limit(limit)
      .exec();

    const total = await this.airportModel.countDocuments(filter).exec();

    return { airports, total };
  }

  findOne(id: string): Promise<Airport> {
    return this.airportModel.findById(id).exec();
  }

  async create(airport: Airport): Promise<Airport> {
    const newAirport = new this.airportModel(airport);
    return newAirport.save();
  }

  async update(id: string, airport: Airport): Promise<void> {
    await this.airportModel.findByIdAndUpdate(id, airport).exec();
  }

  async remove(id: string): Promise<void> {
    await this.airportModel.findByIdAndDelete(id).exec();
  }
}
