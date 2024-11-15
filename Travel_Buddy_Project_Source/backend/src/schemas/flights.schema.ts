// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type FlightDocument = Flight & Document;

// @Schema()
// export class Flight {
//   @Prop({ required: true })
//   type: string;

//   @Prop({ required: true })
//   departureCity: string;

//   @Prop({ required: true })
//   destinationCity: string;

//   @Prop({ required: true })
//   departureDate: string;

//   @Prop()
//   returnDate?: string;

//   @Prop({ type: Object })
//   passengers: any;

//   @Prop({ type: Object })
//   flightOffers: any; // Stores the formatted flight offer data

//   @Prop({ type: Object })
//   aircrafts: any;

//   @Prop({ type: Object })
//   carriers: any;

//   @Prop({ type: Object })
//   currencies: any;

//   @Prop({ required: true })
//   createdAt: { type: Date; default: Date.now };
// }

// export const FlightSchema = SchemaFactory.createForClass(Flight);
