import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Airline extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  alias?: string;

  @Prop({ required: false })
  iata?: string;

  @Prop({ required: false })
  icao?: string;

  @Prop({ required: false })
  callsign?: string;

  @Prop({ required: false })
  country?: string;

  @Prop({ required: true, default: 'Y' })
  active: string;
}

export const AirlineSchema = SchemaFactory.createForClass(Airline);
