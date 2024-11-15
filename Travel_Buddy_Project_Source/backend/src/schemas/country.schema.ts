import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Country extends Document {
  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  additional_code?: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
