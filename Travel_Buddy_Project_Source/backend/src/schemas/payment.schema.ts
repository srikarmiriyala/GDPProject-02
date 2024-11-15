import { Schema, Document, Types } from 'mongoose';

export const PaymentSchema = new Schema({
  stripePaymentId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true },
  user: { type: Types.ObjectId, ref: 'User', required: true },
  booking: { type: Types.ObjectId, ref: 'Booking', required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface Payment extends Document {
  stripePaymentId: string;
  amount: number;
  currency: string;
  status: string;
  user: Types.ObjectId; // Reference type for User
  booking: Types.ObjectId; // Reference type for Booking
  createdAt: Date;
}
