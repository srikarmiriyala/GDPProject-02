import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AirlinesModule } from './airlines/airlines.module';
import { AirportsModule } from './airports/airports.module';
import { CountriesModule } from './countries/countries.module';
import { PlanesModule } from './planes/planes.module';
import { RoutesModule } from './routes/routes.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BookingModule } from './booking/booking.module';
import { FlightModule } from './flight/flight.module';
import { NotificationModule } from './notification/notification.module';
import { PassengerModule } from './passenger/passenger.module';
import { PaymentModule } from './payment/payment.module';
import { RatingModule } from './rating/rating.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';
import { AmadeusModule } from './amadeus/amadeus.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      serverSelectionTimeoutMS: 360000,
    }),
    AuthModule,
    UserModule,
    AdminModule,
    AmadeusModule,
    AirlinesModule,
    AirportsModule,
    BookingModule,
    CountriesModule,
    FlightModule,
    NotificationModule,
    PassengerModule,
    PaymentModule,
    PlanesModule,
    RatingModule,
    ReviewModule,
    RoutesModule,
  ],
})
export class AppModule {}
