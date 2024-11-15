// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Review } from '../entities/review.entity';
// import { User } from '../entities/user.entity';
// import { Flight } from '../entities/flight.entity';
// import { CreateReviewDto } from './dto/create-review.dto';

// @Injectable()
// export class ReviewService {
//   constructor(
//     @InjectRepository(Review)
//     private reviewRepository: Repository<Review>,
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//     @InjectRepository(Flight)
//     private flightRepository: Repository<Flight>,
//   ) {}

//   async addReview(createReviewDto: CreateReviewDto): Promise<Review> {
//     const { userId, flightId, content } = createReviewDto;

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

//     const review = this.reviewRepository.create({
//       content,
//       user,
//       flight,
//       createdAt: new Date(),
//     });

//     return this.reviewRepository.save(review);
//   }

//   async getReviewsByFlight(flightId: number): Promise<Review[]> {
//     return this.reviewRepository.find({
//       where: { flight: { id: flightId } },
//       relations: ['user'],
//       order: { createdAt: 'DESC' },
//     });
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // InjectModel from Mongoose
import { Model } from 'mongoose'; // Use Mongoose's Model instead of Repository
import { Review } from '../schemas/review.schema'; // Updated for MongoDB schema
import { User } from '../schemas/user.schema'; // Updated for MongoDB schema
import { Flight } from '../schemas/flight.schema'; // Updated for MongoDB schema
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>, // Updated to use Mongoose Model
    @InjectModel(User.name) private userModel: Model<User>, // Updated for MongoDB
    @InjectModel(Flight.name) private flightModel: Model<Flight>, // Updated for MongoDB
  ) {}

  async addReview(createReviewDto: CreateReviewDto): Promise<Review> {
    const { userId, flightId, content } = createReviewDto;

    // Fetch the user with the given ID
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Fetch the flight with the given ID
    const flight = await this.flightModel.findById(flightId);
    if (!flight) {
      throw new NotFoundException(`Flight with ID ${flightId} not found`);
    }

    const review = new this.reviewModel({
      content,
      user: userId,
      flight: flightId,
      createdAt: new Date(),
    });

    return review.save();
  }

  async getReviewsByFlight(flightId: string): Promise<Review[]> {
    return this.reviewModel
      .find({ flight: flightId })
      .populate('user') // Populate user details
      .sort({ createdAt: -1 }) // Sort by createdAt (descending)
      .exec();
  }
}
