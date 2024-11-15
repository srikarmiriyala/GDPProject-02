// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Route } from 'src/entities/routes.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class RoutesService {
//   constructor(
//     @InjectRepository(Route)
//     private routesRepository: Repository<Route>,
//   ) {}

//   // Find all with sorting, filtering, and pagination, including total count
//   async findAll(query: any): Promise<{ routes: Route[]; total: number }> {
//     // Default sorting by 'id' if no sort field is provided
//     const {
//       search,
//       sort = 'id',
//       order = 'ASC',
//       limit = 10,
//       offset = 0,
//     } = query;

//     const qb = this.routesRepository.createQueryBuilder('route');

//     // Add case-insensitive search filter if provided
//     if (search) {
//       qb.where(
//         'LOWER(route.airline_code) LIKE LOWER(:search) OR LOWER(route.departure_airport) LIKE LOWER(:search) OR LOWER(route.arrival_airport) LIKE LOWER(:search) OR LOWER(route.flight_number) LIKE LOWER(:search)',
//         { search: `%${search}%` },
//       );
//     }

//     // Add sorting by the provided column or default to 'id'
//     qb.orderBy(`route.${sort}`, order.toUpperCase() as any);

//     // Add pagination (limit and offset)
//     qb.skip(offset).take(limit);

//     // Get the results and the total count
//     const [routes, total] = await qb.getManyAndCount();

//     return { routes, total };
//   }

//   findOne(id: number): Promise<Route> {
//     return this.routesRepository.findOne({ where: { id } });
//   }

//   async create(route: Route): Promise<Route> {
//     return this.routesRepository.save(route);
//   }

//   async update(id: number, route: Route): Promise<void> {
//     await this.routesRepository.update(id, route);
//   }

//   async remove(id: number): Promise<void> {
//     await this.routesRepository.delete(id);
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Route } from '../schemas/route.schema';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name) private readonly routeModel: Model<Route>,
  ) {}

  // Find all with sorting, filtering, and pagination, including total count
  async findAll(query: any): Promise<{ routes: Route[]; total: number }> {
    const {
      search,
      sort = 'id',
      order = 'ASC',
      limit = 10,
      offset = 0,
    } = query;

    const searchFilter = search
      ? {
          $or: [
            { airline_code: new RegExp(search, 'i') },
            { departure_airport: new RegExp(search, 'i') },
            { arrival_airport: new RegExp(search, 'i') },
            { flight_number: new RegExp(search, 'i') },
          ],
        }
      : {};

    const routes = await this.routeModel
      .find(searchFilter)
      .sort({ [sort]: order === 'ASC' ? 1 : -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .exec();

    const total = await this.routeModel.countDocuments(searchFilter).exec();

    return { routes, total };
  }

  async findOne(id: string): Promise<Route> {
    const route = await this.routeModel.findById(id).exec();
    if (!route) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }
    return route;
  }

  async create(route: Route): Promise<Route> {
    const newRoute = new this.routeModel(route);
    return newRoute.save();
  }

  async update(id: string, route: Route): Promise<Route> {
    const updatedRoute = await this.routeModel
      .findByIdAndUpdate(id, route, {
        new: true,
      })
      .exec();

    if (!updatedRoute) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }

    return updatedRoute;
  }

  async remove(id: string): Promise<void> {
    const result = await this.routeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }
  }
}
