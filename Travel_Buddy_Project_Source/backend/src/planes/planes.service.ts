// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Plane } from 'src/entities/planes.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class PlanesService {
//   constructor(
//     @InjectRepository(Plane)
//     private planesRepository: Repository<Plane>,
//   ) {}

//   // Find all with sorting, filtering, and pagination, including total count
//   async findAll(query: any): Promise<{ planes: Plane[]; total: number }> {
//     const { search, sort, order = 'ASC', limit = 10, offset = 0 } = query;

//     const qb = this.planesRepository.createQueryBuilder('plane');

//     // Add case-insensitive search filter
//     if (search) {
//       qb.where(
//         'LOWER(plane.name) LIKE LOWER(:search) OR LOWER(plane.code) LIKE LOWER(:search)',
//         {
//           search: `%${search}%`,
//         },
//       );
//     }

//     // Add sorting
//     if (sort) {
//       qb.orderBy(`plane.${sort}`, order.toUpperCase() as any);
//     }

//     // Add pagination
//     qb.skip(offset).take(limit);

//     // Get the result and the total count
//     const [planes, total] = await qb.getManyAndCount();

//     return { planes, total };
//   }

//   findOne(id: number): Promise<Plane> {
//     return this.planesRepository.findOne({ where: { id } });
//   }

//   async create(plane: Plane): Promise<Plane> {
//     return this.planesRepository.save(plane);
//   }

//   async update(id: number, plane: Plane): Promise<void> {
//     await this.planesRepository.update(id, plane);
//   }

//   async remove(id: number): Promise<void> {
//     await this.planesRepository.delete(id);
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plane } from '../schemas/plane.schema'; // Import Mongoose Plane Schema
import { Model } from 'mongoose'; // Mongoose Model type

@Injectable()
export class PlanesService {
  constructor(@InjectModel(Plane.name) private planeModel: Model<Plane>) {}

  // Find all with sorting, filtering, and pagination, including total count
  async findAll(query: any): Promise<{ planes: Plane[]; total: number }> {
    const {
      search,
      sort = '_id',
      order = 'ASC',
      limit = 10,
      offset = 0,
    } = query;

    const filter = {};
    if (search) {
      filter['$or'] = [
        { name: { $regex: search, $options: 'i' } },
        { code: { $regex: search, $options: 'i' } },
      ];
    }

    const total = await this.planeModel.countDocuments(filter);
    const planes = await this.planeModel
      .find(filter)
      .sort({ [sort]: order === 'ASC' ? 1 : -1 })
      .skip(Number(offset))
      .limit(Number(limit))
      .exec();

    return { planes, total };
  }

  async findOne(id: string): Promise<Plane> {
    const plane = await this.planeModel.findById(id).exec();
    if (!plane) {
      throw new NotFoundException(`Plane with ID ${id} not found`);
    }
    return plane;
  }

  async create(plane: Plane): Promise<Plane> {
    const newPlane = new this.planeModel(plane);
    return newPlane.save();
  }

  async update(id: string, plane: Plane): Promise<void> {
    const updatedPlane = await this.planeModel
      .findByIdAndUpdate(id, plane, {
        new: true,
      })
      .exec();
    if (!updatedPlane) {
      throw new NotFoundException(`Plane with ID ${id} not found`);
    }
  }

  async remove(id: string): Promise<void> {
    const result = await this.planeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Plane with ID ${id} not found`);
    }
  }
}
