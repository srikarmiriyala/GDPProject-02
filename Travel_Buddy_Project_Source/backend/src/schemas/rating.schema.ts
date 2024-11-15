import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.schema'; // Import the User schema
import { Flight } from './flight.schema'; // Import the Flight schema

@Schema()
export class Rating extends Document {
  @ApiProperty({
    example: '60f7f5c8b546ab001c8b4567',
    description: 'The unique ID of the rating',
  })
  _id: Types.ObjectId;

  @Prop({ required: true })
  @ApiProperty({ description: 'The score given in the rating' })
  score: number;

  @Prop({ default: Date.now })
  @ApiProperty({ description: 'The creation date of the rating' })
  createdAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  @ApiProperty({ description: 'Reference to the User who gave the rating' })
  user: Types.ObjectId | User;

  @Prop({ type: Types.ObjectId, ref: 'Flight', required: true })
  @ApiProperty({ description: 'Reference to the Flight being rated' })
  flight: Types.ObjectId | Flight;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
