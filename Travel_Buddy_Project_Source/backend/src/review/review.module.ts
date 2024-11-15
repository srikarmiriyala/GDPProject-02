// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ReviewService } from './review.service';
// import { ReviewController } from './review.controller';
// import { Review } from '../entities/review.entity';
// import { User } from '../entities/user.entity';
// import { Flight } from '../entities/flight.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Review, User, Flight])],
//   providers: [ReviewService],
//   controllers: [ReviewController],
// })
// export class ReviewModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Updated to use Mongoose
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { Review, ReviewSchema } from '../schemas/review.schema'; // Updated to use Mongoose schema
import { User, UserSchema } from '../schemas/user.schema'; // Updated for MongoDB schema
import { Flight, FlightSchema } from '../schemas/flight.schema'; // Updated for MongoDB schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }]),
  ],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
