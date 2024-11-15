// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { PassengerService } from './passenger.service';
// import { PassengerController } from './passenger.controller';
// import { Passenger } from 'src/entities/passenger.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Passenger])],
//   controllers: [PassengerController],
//   providers: [PassengerService],
//   exports: [PassengerService],
// })
// export class PassengerModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { Passenger, PassengerSchema } from '../schemas/passenger.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Passenger.name, schema: PassengerSchema },
    ]),
  ],
  controllers: [PassengerController],
  providers: [PassengerService],
  exports: [PassengerService],
})
export class PassengerModule {}
