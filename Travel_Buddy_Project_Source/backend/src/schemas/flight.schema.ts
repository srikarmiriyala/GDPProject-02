import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Booking } from './booking.schema';

@Schema()
export class Flight extends Document {
  @Prop({ required: true })
  airline: string;

  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true, type: Number }) // Explicitly specify the type
  availableSeats: number;

  @Prop({ required: true, type: Date }) // Specify the type as Date
  departureTime: Date;

  @Prop({ required: true, type: Date }) // Specify the type as Date
  arrivalTime: Date;

  @Prop({ required: true, type: Number }) // Specify type as Number for price
  price: number;

  @Prop({ required: true, type: String }) // Ensure this is a string
  duration: string;

  @Prop({ type: String }) // Optional field with string type
  flightNumber?: string;

  @Prop({ type: String }) // Optional field with string type
  equipmentType?: string;

  @Prop({ type: String }) // Optional field with string type
  electronicTicketing?: string;

  // Allow cabinClass to be an array of strings
  @Prop({ type: [String], default: [] }) // Explicit array of strings type
  cabinClass: string[];

  @Prop({ type: String }) // Optional field with string type
  fareBasis?: string;

  @Prop({ type: String }) // Optional field with string type
  techstop?: string;

  // Detailed departure information
  @Prop({
    type: Object,
    default: {},
  })
  departure?: {
    airportName: string;
    city: string;
    country: string;
    terminal?: string;
  };

  // Detailed arrival information
  @Prop({
    type: Object,
    default: {},
  })
  arrival?: {
    airportName: string;
    city: string;
    country: string;
    terminal?: string;
  };

  // One-to-Many relationship with Booking
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Booking' }] })
  bookings: Booking[];
}

export const FlightSchema = SchemaFactory.createForClass(Flight);
