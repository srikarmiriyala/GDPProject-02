import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment } from '../schemas/payment.schema';
import { User } from '../schemas/user.schema';
import { Booking } from '../schemas/booking.schema';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(
    @InjectModel('Payment') private paymentModel: Model<Payment>, // Use 'Payment' as the string name
    @InjectModel('User') private userModel: Model<User>, // Use 'User' as the string name
    @InjectModel('Booking') private bookingModel: Model<Booking>,
    private configService: ConfigService,
  ) {
    this.stripe = new Stripe(
      this.configService.get<string>('STRIPE_SECRET_KEY'),
      {
        apiVersion: '2024-06-20',
      },
    );
  }

  async processPayment(
    userId: string, // Updated to string for MongoDB ObjectId
    bookingId: string, // Updated to string for MongoDB ObjectId
    token: string,
  ): Promise<Payment> {
    // Fetch the user with the given ID
    const user = await this.userModel.findById(userId);
    console.log('user:', user);
    if (!user) {
      throw new BadRequestException(`User with ID ${userId} not found`);
    }

    // Fetch the booking with the given ID
    const booking = await this.bookingModel.findById(bookingId);
    console.log('booking:', booking);
    if (!booking) {
      throw new BadRequestException(`Booking with ID ${bookingId} not found`);
    }

    const amount = 1000; // Amount in cents
    const currency = 'usd';

    // Create a charge with Stripe
    const charge = await this.stripe.charges.create({
      amount,
      currency,
      source: token,
      description: `Payment for booking ${bookingId}`,
      receipt_email: user.email,
    });

    // Create a new Payment document
    const payment = new this.paymentModel({
      stripePaymentId: charge.id,
      amount,
      currency,
      status: charge.status,
      user: userId,
      booking: bookingId,
      createdAt: new Date(),
    });

    // Save the payment in the database
    return payment.save();
  }

  async getPaymentHistory(userId: string): Promise<Payment[]> {
    return this.paymentModel
      .find({ user: userId })
      .sort({ createdAt: -1 })
      .exec();
  }
}
