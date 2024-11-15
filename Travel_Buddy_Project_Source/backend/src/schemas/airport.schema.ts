import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Airport extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  city?: string;

  @Prop({ required: false })
  country?: string;

  @Prop({ required: false })
  iata?: string;

  @Prop({ required: false })
  icao?: string;

  @Prop({ type: 'decimal128', required: false })
  latitude?: number;

  @Prop({ type: 'decimal128', required: false })
  longitude?: number;

  @Prop({ required: true })
  altitude: number;

  @Prop({ required: false })
  timezone?: number;

  @Prop({ required: false })
  dst?: string;

  @Prop({ required: false })
  tz?: string;

  @Prop({ required: false })
  type?: string;

  @Prop({ required: false })
  source?: string;
}

export const AirportSchema = SchemaFactory.createForClass(Airport);
