// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Rating } from '../entities/rating.entity';
// import { User } from '../entities/user.entity';
// import { Flight } from '../entities/flight.entity';
// import { CreateRatingDto } from './dto/create-rating.dto';

// @Injectable()
// export class RatingService {
//   constructor(
//     @InjectRepository(Rating)
//     private ratingRepository: Repository<Rating>,
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//     @InjectRepository(Flight)
//     private flightRepository: Repository<Flight>,
//   ) {}

//   async addRating(createRatingDto: CreateRatingDto): Promise<Rating> {
//     const { userId, flightId, score } = createRatingDto;

//     // Fetch the user with the given ID
//     const user = await this.userRepository.findOne({
//       where: { id: userId },
//     });
//     if (!user) {
//       throw new NotFoundException(`User with ID ${userId} not found`);
//     }

//     // Fetch the flight with the given ID
//     const flight = await this.flightRepository.findOne({
//       where: { id: flightId },
//     });
//     if (!flight) {
//       throw new NotFoundException(`Flight with ID ${flightId} not found`);
//     }

//     const rating = this.ratingRepository.create({
//       score,
//       user,
//       flight,
//       createdAt: new Date(),
//     });

//     return this.ratingRepository.save(rating);
//   }

//   async getRatingsByFlight(flightId: number): Promise<Rating[]> {
//     return this.ratingRepository.find({
//       where: { flight: { id: flightId } },
//       relations: ['user'],
//       order: { createdAt: 'DESC' },
//     });
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rating } from '../schemas/rating.schema'; // Mongoose Rating Schema
import { User } from '../schemas/user.schema'; // Mongoose User Schema
import { Flight } from '../schemas/flight.schema'; // Mongoose Flight Schema
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name) private ratingModel: Model<Rating>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Flight.name) private flightModel: Model<Flight>,
  ) {}

  async addRating(createRatingDto: CreateRatingDto): Promise<Rating> {
    const { userId, flightId, score } = createRatingDto;

    // Fetch the user with the given ID
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Fetch the flight with the given ID
    const flight = await this.flightModel.findById(flightId).exec();
    if (!flight) {
      throw new NotFoundException(`Flight with ID ${flightId} not found`);
    }

    const newRating = new this.ratingModel({
      score,
      user: user._id,
      flight: flight._id,
      createdAt: new Date(),
    });

    return newRating.save();
  }

  async getRatingsByFlight(flightId: string): Promise<Rating[]> {
    return this.ratingModel
      .find({ flight: flightId })
      .populate('user', 'email fullName') // Populate user information
      .sort({ createdAt: -1 }) // Sort by date (newest first)
      .exec();
  }
}
