import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BookFlight extends Document {
  @Prop({ type: Object })
  flightCombination: any;

  @Prop({ type: Object })
  fareSummary: any;

  @Prop({ type: Array })
  baggage: any[];

  @Prop({ type: String })
  validatingCarrier: string;

  @Prop({ type: String })
  finalFare: string;

  @Prop({ type: Array })
  flightSummary: any[];

  @Prop({ type: Number })
  totalJourneyTime: number;

  // Additional fields based on validation error
  @Prop({ type: String, required: true })
  from: string;

  @Prop({ type: String, required: true })
  to: string;

  @Prop({ type: String, required: true })
  airline: string;

  @Prop({ type: String, required: true })
  departureTime: string;

  @Prop({ type: String, required: true })
  arrivalTime: string;

  @Prop({ type: Number, required: true })
  duration: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, required: true })
  availableSeats: string;
}

export const FlightSchema = SchemaFactory.createForClass(BookFlight);

// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class BookFlight extends Document {
//   @Prop({ required: true })
//   userId: string;

//   @Prop({ required: true })
//   flightCombination: any[];

//   @Prop({ required: true })
//   fareSummary: any;

//   @Prop({ required: true })
//   baggage: any;

//   @Prop({ required: true })
//   validatingCarrier: string;

//   @Prop({ required: true })
//   finalFare: number;

//   @Prop({ required: true })
//   flightSummary: any;

//   @Prop({ required: true })
//   totalJourneyTime: number;

//   @Prop({ default: Date.now })
//   createdAt: Date;
// }

// export const BookFlightSchema = SchemaFactory.createForClass(BookFlight);
