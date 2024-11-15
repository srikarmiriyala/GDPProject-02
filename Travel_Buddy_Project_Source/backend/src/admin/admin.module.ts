import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Booking, BookingSchema } from '../schemas/booking.schema';
import { User, UserSchema } from '../schemas/user.schema';
import { Flight, FlightSchema } from '../schemas/flight.schema';
import { Payment, PaymentSchema } from '../schemas/payment.schema';
import { FlightService } from '../flight/flight.service';
import { UserService } from '../user/user.service';
import { AuthModule } from 'src/auth/auth.module';
import { AmadeusModule } from 'src/amadeus/amadeus.module'; // Import AmadeusModule
import {
  BookFlight,
  FlightSchema as BookFlightSchema,
} from '../schemas/book-flight.schema'; // BookFlight schema
import { FlightPricingResponseSchema } from '../schemas/flight-pricing-response.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Booking', schema: BookingSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Flight', schema: FlightSchema },
      { name: 'Payment', schema: PaymentSchema }, // Use 'Payment' as the string name
      { name: 'BookFlight', schema: BookFlightSchema }, // Use 'BookFlight' as the string name
      { name: 'FlightPricingResponse', schema: FlightPricingResponseSchema },
    ]),
    AuthModule,
    AmadeusModule,
  ],
  controllers: [AdminController],
  providers: [AdminService, FlightService, UserService],
  exports: [AdminService],
})
export class AdminModule {}
