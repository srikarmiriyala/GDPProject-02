import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.schema'; // Import the User schema
import { Flight } from './flight.schema'; // Import the Flight schema

@Schema()
export class Review extends Document {
  @ApiProperty({
    example: '60f7f5c8b546ab001c8b4567',
    description: 'The unique ID of the review',
  })
  _id: Types.ObjectId;

  @Prop({ required: true })
  @ApiProperty({ description: 'The content of the review' })
  content: string;

  @Prop({ default: Date.now })
  @ApiProperty({ description: 'The creation date of the review' })
  createdAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  @ApiProperty({ description: 'Reference to the User who wrote the review' })
  user: Types.ObjectId | User;

  @Prop({ type: Types.ObjectId, ref: 'Flight', required: true })
  @ApiProperty({ description: 'Reference to the Flight being reviewed' })
  flight: Types.ObjectId | Flight;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
