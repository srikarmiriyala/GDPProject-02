// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { RatingService } from './rating.service';
// import { RatingController } from './rating.controller';
// import { Rating } from '../entities/rating.entity';
// import { User } from '../entities/user.entity';
// import { Flight } from '../entities/flight.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Rating, User, Flight])],
//   providers: [RatingService],
//   controllers: [RatingController],
// })
// export class RatingModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { Rating, RatingSchema } from '../schemas/rating.schema';
import { User, UserSchema } from '../schemas/user.schema';
import { Flight, FlightSchema } from '../schemas/flight.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rating.name, schema: RatingSchema },
      { name: User.name, schema: UserSchema },
      { name: Flight.name, schema: FlightSchema },
    ]),
  ],
  providers: [RatingService],
  controllers: [RatingController],
})
export class RatingModule {}
