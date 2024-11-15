import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios'; // Import for HttpService
import { AmadeusController } from './amadeus.controller'; // Controller for Amadeus API
import { AmadeusService } from './amadeus.service'; // Service for Amadeus API
import { MongooseModule } from '@nestjs/mongoose';
import {
  FlightPricingResponse,
  FlightPricingResponseSchema,
} from 'src/schemas/flight-pricing-response.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'FlightPricingResponse', schema: FlightPricingResponseSchema },
    ]),
    ConfigModule,
    HttpModule,
  ], // Include ConfigModule for environment variables
  controllers: [AmadeusController], // Include AmadeusController if needed
  providers: [AmadeusService], // Provide AmadeusService for dependency injection
  exports: [AmadeusService], // Export AmadeusService for use in other modules
})
export class AmadeusModule {}
