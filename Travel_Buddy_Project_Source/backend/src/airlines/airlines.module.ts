import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AirlinesService } from './airlines.service';
import { AirlinesController } from './airlines.controller';
import { Airline, AirlineSchema } from '../schemas/airline.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Airline.name, schema: AirlineSchema }]),
    AuthModule,
  ],
  providers: [AirlinesService],
  controllers: [AirlinesController],
})
export class AirlinesModule {}
