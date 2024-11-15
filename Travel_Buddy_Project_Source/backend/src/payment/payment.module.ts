import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { Payment, PaymentSchema } from '../schemas/payment.schema';
import { User, UserSchema } from '../schemas/user.schema';
import { Booking, BookingSchema } from '../schemas/booking.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Payment', schema: PaymentSchema }]), // Use 'Payment' as the string name
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Use 'User' as the string name
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]), // Use 'Booking' as the string name
    ConfigModule,
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
  exports: [PaymentService],
})
export class PaymentModule {}
