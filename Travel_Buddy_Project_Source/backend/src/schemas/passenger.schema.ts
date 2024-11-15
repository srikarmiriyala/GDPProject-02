import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Passenger extends Document {
  @Prop({ required: false })
  title: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: false })
  dateOfBirth: Date;

  @Prop({ required: false })
  passportNumber: string;

  @Prop({ required: false })
  passportExpiry: Date;

  @Prop({ unique: true })
  passengerId: string; // Unique ID for identifying the passenger
}

export const PassengerSchema = SchemaFactory.createForClass(Passenger);
