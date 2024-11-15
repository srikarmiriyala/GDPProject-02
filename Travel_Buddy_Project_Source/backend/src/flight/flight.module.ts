import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { Flight, FlightSchema } from '../schemas/flight.schema';
import {
  BookFlight,
  FlightSchema as BookFlightSchema,
} from '../schemas/book-flight.schema'; // Import BookFlight schema
import { AmadeusModule } from 'src/amadeus/amadeus.module'; // Import AmadeusModule
import { FlightPricingResponseSchema } from '../schemas/flight-pricing-response.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Flight.name, schema: FlightSchema }, // Register Flight schema
      { name: BookFlight.name, schema: BookFlightSchema }, // Register BookFlight schema
      { name: 'FlightPricingResponse', schema: FlightPricingResponseSchema },
    ]),
    AmadeusModule, // Use AmadeusModule to provide AmadeusService
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use your JWT secret from env file
      signOptions: { expiresIn: '1h' }, // Optional: configure expiration
    }), // Register JwtModule to provide JwtService
  ],
  providers: [FlightService],
  controllers: [FlightController],
  exports: [FlightService],
})
export class FlightModule {}
