import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking, BookingSchema } from '../schemas/booking.schema';
import { Flight, FlightSchema } from '../schemas/flight.schema';
import { Passenger, PassengerSchema } from '../schemas/passenger.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // Load environment variables
    ConfigModule.forRoot(),

    // Configure Mongoose models with schemas
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema },
      { name: Flight.name, schema: FlightSchema },
      { name: Passenger.name, schema: PassengerSchema },
    ]),

    // Import and configure JwtModule to use JWT for authentication
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' }, // Configure JWT token expiry as needed
      }),
    }),
  ],
  providers: [BookingService],
  controllers: [BookingController],
  exports: [BookingService],
})
export class BookingModule {}
